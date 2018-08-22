import { GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './actions';

// noinspection JSAnnotator
export const books = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload };

    case GET_BOOKS_FAILURE:
      return { ...state, books: action.payload };

    default:
      return state;
  }
};
