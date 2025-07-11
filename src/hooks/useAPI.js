
import { useState, useEffect } from 'react';
import apiServices from '../services/api.js';

// Hook personalizado para autenticação
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (apiServices.utils.isAuthenticated()) {
        const userData = await apiServices.auth.me();
        setUser(userData);
      }
    } catch (error) {
      setError(error.message);
      apiServices.utils.removeAuthToken();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await apiServices.auth.login(credentials);
      apiServices.utils.setAuthToken(response.token);
      setUser(response.user);
      setError(null);
      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiServices.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      apiServices.utils.removeAuthToken();
    }
  };

  return { user, loading, error, login, logout, checkAuth };
};

// Hook genérico para requisições da API
export const useAPI = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

// Hook específico para upload de arquivos
export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const uploadFile = async (file, uploadFunction) => {
    try {
      setUploading(true);
      setError(null);
      setProgress(0);
      
      // Simular progresso
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 100);

      const result = await uploadFunction(file);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      setTimeout(() => {
        setProgress(0);
        setUploading(false);
      }, 500);

      return result;
    } catch (error) {
      setError(error.message);
      setUploading(false);
      setProgress(0);
      throw error;
    }
  };

  return { uploading, progress, error, uploadFile };
};

// Hook para gerenciar lista de itens com CRUD
export const useCRUD = (service) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await service.getAll();
      setItems(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (data) => {
    try {
      const newItem = await service.create(data);
      setItems(prev => [...prev, newItem]);
      return newItem;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const updateItem = async (id, data) => {
    try {
      const updatedItem = await service.update(id, data);
      setItems(prev => prev.map(item => 
        item.id === id ? updatedItem : item
      ));
      return updatedItem;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const deleteItem = async (id) => {
    try {
      await service.delete(id);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    items,
    loading,
    error,
    fetchItems,
    createItem,
    updateItem,
    deleteItem
  };
};

export default {
  useAuth,
  useAPI,
  useFileUpload,
  useCRUD
};
