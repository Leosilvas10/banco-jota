import { useState, useEffect, useCallback } from 'react';

export const useLandingData = (enablePolling = false, pollingInterval = 30000) => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Debounce para evitar múltiplas requisições
  const [isDebouncing, setIsDebouncing] = useState(false);

  const fetchLandingData = useCallback(async (attempt = 1) => {
    // Evitar requisições simultâneas
    if (isDebouncing && attempt === 1) {
      console.log('🔄 Requisição em debounce, aguardando...');
      return;
    }

    setIsDebouncing(true);

    try {
      if (attempt === 1) setError(null);
      
      console.log(`🔄 Tentativa ${attempt} - Carregando dados da landing page...`);
      
      const apiUrl = import.meta.env.VITE_API_URL || 'http://212.85.10.205:3000';
      
      const response = await fetch(`${apiUrl}/api/content/landing/banco-jota`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        signal: AbortSignal.timeout(15000) // Aumentar timeout para 15s
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Dados carregados com sucesso:', result);
      
      let data = null;
      if (result.data) {
        data = result.data;
      } else if (result.landing) {
        data = result.landing;
      } else {
        data = result;
      }
      
      setLandingData(data);
      setRetryCount(0);
      
    } catch (err) {
      console.error(`❌ Erro na tentativa ${attempt}:`, err);
      
      // Tentar novamente até 3 vezes com delay maior
      if (attempt < 3) {
        console.log(`🔄 Tentando novamente em 5 segundos... (${attempt}/3)`);
        setTimeout(() => {
          fetchLandingData(attempt + 1);
        }, 5000); // Aumentar delay para 5s
        return;
      }
      
      console.log('⚠️ Máximo de tentativas atingido, usando dados padrão');
      setError(`Erro após ${attempt} tentativas: ${err.message}`);
      setRetryCount(attempt);
      
      setLandingData({
        title: 'Consórcio Imobiliário Banco Jota',
        subtitle: 'Realize o sonho da casa própria sem juros',
        description: 'Atendimento consultivo especializado em consórcio.',
        cta: 'Fale Conosco',
        status: 'fallback'
      });
    } finally {
      setLoading(false);
      // Liberar debounce após 2 segundos
      setTimeout(() => setIsDebouncing(false), 2000);
    }
  }, [isDebouncing]);

  useEffect(() => {
    fetchLandingData();
  }, [fetchLandingData]);

  // Polling mais conservador
  useEffect(() => {
    if (!enablePolling) return;

    const interval = setInterval(() => {
      console.log('🔄 Polling - Verificando atualizações...');
      fetchLandingData();
    }, Math.max(pollingInterval, 30000)); // Mínimo 30s entre polls

    return () => clearInterval(interval);
  }, [enablePolling, pollingInterval, fetchLandingData]);

  const refetch = useCallback(() => {
    console.log('🔄 Refetch manual solicitado');
    setLoading(true);
    setRetryCount(0);
    fetchLandingData();
  }, [fetchLandingData]);

  const connectionStatus = {
    isConnected: !!landingData && !error,
    hasError: !!error,
    retryCount,
    isUsingFallback: landingData?.status === 'fallback'
  };

  return {
    landingData,
    loading,
    error,
    refetch,
    connectionStatus
  };
};

export default useLandingData;
