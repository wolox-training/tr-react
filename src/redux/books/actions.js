
import  BookService from '../../services/BookService';

export const actions = createTypes([
    'GET_BOOKS',
    'GET_BOOKS_SUCCESS',
    'GET_BOOKS_FAILURE'
], '@@BOOKS');

const actionCreators = {
    getBooks: () => async dispatch => {
        dispatch({ type: actions.GET_BOOKS });
        const response = await BookService.getBookDetail();
        if (response.ok) {
            dispatch({
                type: actions.GET_BOOKS_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: actions.GET_BOOKS_FAILURE,
                payload: response.problem
            });
        }
    }
}

export default actionCreators