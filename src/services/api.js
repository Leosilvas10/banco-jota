// src/services/api.js

// Configuração base da API
const API_BASE_URL = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Função helper para fazer requisições
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('authToken');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    },
    ...options
  };

  // Remove Content-Type para FormData
  if (options.body instanceof FormData) {
    delete config.headers['Content-Type'];
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// 🔐 SERVIÇOS DE AUTENTICAÇÃO
export const authService = {
  // Login do administrador
  login: async (credentials) => {
    return apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },

  // Logout do administrador
  logout: async () => {
    const result = await apiRequest('/api/auth/logout', {
      method: 'POST'
    });
    localStorage.removeItem('authToken');
    return result;
  },

  // Verificar se está autenticado
  me: async () => {
    return apiRequest('/api/auth/me');
  }
};

// 🏷️ SERVIÇOS DE LOGO
export const logoService = {
  // Upload da nova logo
  upload: async (logoFile) => {
    const formData = new FormData();
    formData.append('logo', logoFile);
    return apiRequest('/api/logo/upload', {
      method: 'POST',
      body: formData
    });
  },

  // Obter logo atual
  get: async () => {
    return apiRequest('/api/logo');
  },

  // Excluir logo atual
  delete: async () => {
    return apiRequest('/api/logo', {
      method: 'DELETE'
    });
  }
};

// 🎥 SERVIÇOS DE VÍDEOS
export const videoService = {
  // Upload de vídeo
  upload: async (videoFile) => {
    const formData = new FormData();
    formData.append('video', videoFile);
    return apiRequest('/api/videos/upload', {
      method: 'POST',
      body: formData
    });
  },

  // Listar todos os vídeos
  getAll: async () => {
    return apiRequest('/api/videos');
  },

  // Obter vídeo específico
  getById: async (id) => {
    return apiRequest(`/api/videos/${id}`);
  },

  // Atualizar metadados do vídeo
  update: async (id, data) => {
    return apiRequest(`/api/videos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  // Excluir vídeo
  delete: async (id) => {
    return apiRequest(`/api/videos/${id}`, {
      method: 'DELETE'
    });
  }
};

// 📝 SERVIÇOS DE CONTEÚDO TEXTUAL
export const contentService = {
  // Listar todas as seções
  getAllSections: async () => {
    return apiRequest('/api/content/sections');
  },

  // Obter conteúdo de seção específica
  getSection: async (section) => {
    return apiRequest(`/api/content/sections/${section}`);
  },

  // Atualizar conteúdo de seção
  updateSection: async (section, data) => {
    return apiRequest(`/api/content/sections/${section}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
};

// 🧩 SERVIÇOS DE BLOCOS DE CONTEÚDO
export const blocksService = {
  // Listar todos os blocos
  getAll: async () => {
    return apiRequest('/api/blocks');
  },

  // Criar novo bloco
  create: async (data) => {
    return apiRequest('/api/blocks', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  // Obter bloco específico
  getById: async (id) => {
    return apiRequest(`/api/blocks/${id}`);
  },

  // Atualizar bloco
  update: async (id, data) => {
    return apiRequest(`/api/blocks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  // Excluir bloco
  delete: async (id) => {
    return apiRequest(`/api/blocks/${id}`, {
      method: 'DELETE'
    });
  },

  // Reordenar blocos
  reorder: async (data) => {
    return apiRequest('/api/blocks/reorder', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
};

// ⚙️ SERVIÇOS DE CONFIGURAÇÕES
export const settingsService = {
  // Obter todas as configurações
  getAll: async () => {
    return apiRequest('/api/settings');
  },

  // Atualizar configurações gerais
  update: async (data) => {
    return apiRequest('/api/settings', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  // Atualizar configurações de SEO
  updateSEO: async (data) => {
    return apiRequest('/api/settings/seo', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
};

// 🖼️ SERVIÇOS DE IMAGENS
export const imageService = {
  // Upload de imagens
  upload: async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    return apiRequest('/api/images/upload', {
      method: 'POST',
      body: formData
    });
  },

  // Listar imagens
  getAll: async () => {
    return apiRequest('/api/images');
  },

  // Excluir imagem
  delete: async (id) => {
    return apiRequest(`/api/images/${id}`, {
      method: 'DELETE'
    });
  }
};

// 🔧 UTILITÁRIOS
export const apiUtils = {
  // Salvar token de autenticação
  setAuthToken: (token) => {
    localStorage.setItem('authToken', token);
  },

  // Remover token de autenticação
  removeAuthToken: () => {
    localStorage.removeItem('authToken');
  },

  // Verificar se está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};

// Export default com todos os serviços
export default {
  auth: authService,
  logo: logoService,
  video: videoService,
  content: contentService,
  blocks: blocksService,
  settings: settingsService,
  image: imageService,
  utils: apiUtils
};
