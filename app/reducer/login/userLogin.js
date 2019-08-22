import * as actionTypes from '../../actions/login/loginActionTypes';

const initialState = {
  userLogin: {},
  isFetching: true,
};

export default (userLogin = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.USER_LOGIN_FULFILLED:
      return {
        ...state,
        isFetching: false,
        userLogin: action.payload,
      };
    case actionTypes.USER_LOGIN_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      break;
  }
  return state;
});
