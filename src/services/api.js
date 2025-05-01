import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Law API methods
export const lawsApi = {
  // Get all laws
  getAllLaws: async () => {
    try {
      const response = await api.get('/laws');
      return response.data;
    } catch (error) {
      console.error('Error fetching laws:', error);
      throw error;
    }
  },

  // Get a specific law by ID
  getLawById: async (id) => {
    try {
      const response = await api.get(`/laws/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching law with ID ${id}:`, error);
      throw error;
    }
  },

  // Get articles for a specific law
  getLawArticles: async (id) => {
    try {
      const response = await api.get(`/laws/${id}/articles`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching articles for law ID ${id}:`, error);
      throw error;
    }
  },

  // Search for laws
  searchLaws: async (query) => {
    try {
      const response = await api.get(`/laws/search?query=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching laws:', error);
      throw error;
    }
  },

  // Fetch new laws from TogetherAI
  fetchLaws: async (category, count = 5) => {
    try {
      const response = await api.post('/laws/fetch', { category, count });
      return response.data;
    } catch (error) {
      console.error('Error fetching laws from TogetherAI:', error);
      throw error;
    }
  },

  // Fetch articles for a law from TogetherAI
  fetchArticles: async (id, count = 10) => {
    try {
      const response = await api.post(`/laws/${id}/fetch-articles`, { count });
      return response.data;
    } catch (error) {
      console.error(`Error fetching articles for law ID ${id} from TogetherAI:`, error);
      throw error;
    }
  }
};

export default api; 