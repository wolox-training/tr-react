import Immutable from 'seamless-immutable';

import { CHECK_USER, SET_LOGGED_USER, ERROR_VALIDATION, OFF_NOTIFICATION } from './actions';

const initialState = new Immutable({
  error: null,
  loading: false
});
export const login = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER:
      return state.merge({
        loading: true
      });

    case SET_LOGGED_USER:
      return { ...state, login: action.payload };

    case ERROR_VALIDATION:
      return state.merge({
        loading: false,
        error: action.payload
      });
    case OFF_NOTIFICATION:
      return state.merge({
        error: null,
        loading: false
      });

    default:
      return state;
  }
};
