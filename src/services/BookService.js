import api from '../../src/config/api';

export default {
    getBookDetail: id => api.get('/books', { id })
};