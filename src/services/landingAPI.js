
// Serviço específico para consumir dados da landing page
const LANDING_API_URL = 'https://painel-admin-backend-leonardosilvas2.replit.app/api/content/landing/banco-jota';

export const landingService = {
  // Buscar dados da landing page
  getLandingData: async () => {
    try {
      const response = await fetch(LANDING_API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados da landing page:', error);
      throw error;
    }
  }
};

export default landingService;
