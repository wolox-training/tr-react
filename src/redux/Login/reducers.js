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
        loading: true,
        logged: false
      });

    case SET_LOGGED_USER:
      return state.merge({
        loading: false,
        logged: action.logged,
        name: action.name
      });

    case ERROR_VALIDATION:
      return state.merge({
        loading: false,
        error: action.payload,
        logged: false
      });
    case OFF_NOTIFICATION:
      return state.merge({
        error: null,
        loading: false,
        logged: false
      });

    default:
      return state;
  }
};
