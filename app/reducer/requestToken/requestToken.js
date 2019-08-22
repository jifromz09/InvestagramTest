import * as actionTypes from '../../actions/requestToken/requestTokenActionTypes';

const initialState = {
  requestToken: {},
  isFetching: true,
};

export default (requestToken = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_TOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.REQUEST_TOKEN_FULFILLED:
      return {
        ...state,
        isFetching: false,
        requestToken: action.payload,
      };
    case actionTypes.REQUEST_TOKEN_REJECTED:
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
