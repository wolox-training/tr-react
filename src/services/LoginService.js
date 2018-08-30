import api from '../../src/config/api';

export default {
  checkLogin: () => api.get('/login')
};
