
// Utilitários para formatação e validação
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const validateFile = (file, type = 'image') => {
  const maxSize = type === 'video' ? 100 * 1024 * 1024 : 5 * 1024 * 1024; // 100MB video, 5MB image
  const allowedTypes = {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    video: ['video/mp4', 'video/avi', 'video/mov', 'video/wmv']
  };

  if (file.size > maxSize) {
    throw new Error(`Arquivo muito grande. Máximo: ${formatFileSize(maxSize)}`);
  }

  if (!allowedTypes[type].includes(file.type)) {
    throw new Error(`Tipo de arquivo não permitido. Tipos aceitos: ${allowedTypes[type].join(', ')}`);
  }

  return true;
};

// Funções de manipulação de erro
export const handleAPIError = (error) => {
  if (error.response) {
    // Erro de resposta do servidor
    switch (error.response.status) {
      case 401:
        return 'Não autorizado. Faça login novamente.';
      case 403:
        return 'Acesso negado.';
      case 404:
        return 'Recurso não encontrado.';
      case 500:
        return 'Erro interno do servidor.';
      default:
        return error.response.data?.message || 'Erro na requisição.';
    }
  } else if (error.request) {
    // Erro de rede
    return 'Erro de conexão. Verifique sua internet.';
  } else {
    // Outros erros
    return error.message || 'Erro desconhecido.';
  }
};

// Helper para debounce (útil para busca)
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Helper para formatação de dados de formulário
export const sanitizeFormData = (data) => {
  const sanitized = {};
  
  Object.keys(data).forEach(key => {
    const value = data[key];
    
    if (typeof value === 'string') {
      sanitized[key] = value.trim();
    } else if (value !== null && value !== undefined) {
      sanitized[key] = value;
    }
  });
  
  return sanitized;
};

// Helper para converter seções da landing page
export const mapSectionToAPI = (sectionData) => {
  return {
    title: sectionData.title || '',
    subtitle: sectionData.subtitle || '',
    description: sectionData.description || '',
    buttonText: sectionData.buttonText || '',
    buttonUrl: sectionData.buttonUrl || '',
    imageUrl: sectionData.imageUrl || '',
    videoUrl: sectionData.videoUrl || '',
    enabled: sectionData.enabled !== false
  };
};

// Helper para notificações
export const showNotification = (message, type = 'info') => {
  // Implementar com a biblioteca de notificação de sua escolha
  console.log(`${type.toUpperCase()}: ${message}`);
};

// Configurações específicas para diferentes seções
export const SECTION_CONFIGS = {
  hero: {
    name: 'Hero Section',
    fields: ['title', 'subtitle', 'description', 'buttonText', 'videoUrl']
  },
  about: {
    name: 'Sobre',
    fields: ['title', 'description', 'imageUrl']
  },
  benefits: {
    name: 'Benefícios',
    fields: ['title', 'items']
  },
  howItWorks: {
    name: 'Como Funciona',
    fields: ['title', 'steps']
  },
  testimonials: {
    name: 'Depoimentos',
    fields: ['title', 'items']
  },
  contact: {
    name: 'Contato',
    fields: ['title', 'description', 'whatsapp', 'email']
  },
  faq: {
    name: 'FAQ',
    fields: ['title', 'items']
  }
};

// URL base para assets
export const getAssetUrl = (path) => {
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
  return `${baseUrl}${path}`;
};

export default {
  formatFileSize,
  validateFile,
  handleAPIError,
  debounce,
  sanitizeFormData,
  mapSectionToAPI,
  showNotification,
  SECTION_CONFIGS,
  getAssetUrl
};
