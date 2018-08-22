import api from '../../src/config/api';

export default {
  getBookDetail: () => api.get('/books')
};
