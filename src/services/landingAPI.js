
// Serviço para consumir dados da landing page do painel admin
const BASE_URL = 'https://painel-admin-backend-leonardosilvas2.replit.app';

export const landingService = {
  // Buscar dados da landing page
  getLandingData: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/content/landing/banco-jota`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados da landing page:', error);
      throw new Error(`Falha ao carregar dados: ${error.message}`);
    }
  },

  // Atualizar dados da landing page (se necessário)
  updateLandingData: async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/api/content/landing/banco-jota`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao atualizar dados da landing page:', error);
      throw new Error(`Falha ao atualizar dados: ${error.message}`);
    }
  }
};

export default landingService;
