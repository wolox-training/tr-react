import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { books } from './../redux/books/reducers';

const initialState = {
  books: []
};

const reducer = combineReducers({
  books,
  form: reduxFormReducer // mounted under "form"
});

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
