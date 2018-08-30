import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { books } from './../redux/books/reducers';
import { login } from './../redux/Login/reducers';

const reducer = combineReducers({
  books,
  login,
  form: reduxFormReducer // mounted under "form"
});

export const store = createStore(reducer, applyMiddleware(thunk));
