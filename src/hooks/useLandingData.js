
import { useState, useEffect } from 'react';
import landingService from '../services/landingAPI.js';

export const useLandingData = (enablePolling = false, pollingInterval = 30000) => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLandingData = async () => {
    try {
      setError(null);
      const data = await landingService.getLandingData();
      setLandingData(data);
    } catch (err) {
      setError(err.message);
      console.error('Erro ao carregar dados da landing page:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLandingData();
  }, []);

  // Polling opcional para atualizações em tempo real
  useEffect(() => {
    if (!enablePolling) return;

    const interval = setInterval(() => {
      fetchLandingData();
    }, pollingInterval);

    return () => clearInterval(interval);
  }, [enablePolling, pollingInterval]);

  const refetch = () => {
    setLoading(true);
    fetchLandingData();
  };

  return {
    landingData,
    loading,
    error,
    refetch
  };
};

export default useLandingData;
