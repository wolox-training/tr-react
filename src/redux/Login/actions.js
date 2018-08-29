import LoginService from '../../services/LoginService';

export const GET_LOGGED_USER = 'GET_LOGGED_USER';
export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const CHECK_USER = 'CHECK_USER';
export const ERROR_VALIDATION = 'ERROR_VALIDATION';
export const OFF_NOTIFICATION = 'OFF_NOTIFICATION';

export const actionCreators = {
  checkLogin(valuesForm) {
    return async dispatch => {
      dispatch({
        type: CHECK_USER,
        logged: false,
        loading: true
      });
      const response = await LoginService.checkLogin();
      setTimeout(() => {
        const responseJsonServer = JSON.parse(JSON.stringify(response.data[0]));
        if (response.ok) {
          const objectValuesForm = JSON.parse(JSON.stringify(valuesForm[0]));
          if (
            responseJsonServer.email !== objectValuesForm.email ||
            responseJsonServer.password !== objectValuesForm.password
          ) {
            dispatch({
              type: ERROR_VALIDATION,
              logged: false,
              payload: 'Error Credenciales Invalidas',
              loading: false
            });
          }
        } else {
          dispatch({
            type: SET_LOGGED_USER,
            logged: false,
            payload: response.problem,
            loading: false
          });
        }
        dispatch({
          type: SET_LOGGED_USER,
          logged: true,
          name: responseJsonServer.name,
          loading: false
        });
      }, 2000);
    };
  },
  offNotification() {
    return async dispatch => {
      setTimeout(() => {
        dispatch({ type: OFF_NOTIFICATION, error: null });
      }, 3000);
    };
  },
  logout() {
    return async dispatch => {
      setTimeout(() => {
        dispatch({
          type: SET_LOGGED_USER,
          logged: false
        });
      }, 500);
    };
  }
};
