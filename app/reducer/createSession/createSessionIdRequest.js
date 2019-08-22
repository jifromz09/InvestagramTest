import * as actionTypes from '../../actions/createSession/createSessionIdActionTypes';

const initialState = {
  session: {},
  isFetching: true,
};

export default (createSession = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SESSION_ID:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.CREATE_SESSION_ID_FULFILLED:
      return {
        ...state,
        isFetching: false,
        session: action.payload,
      };
    case actionTypes.CREATE_SESSION__ID_REJECTED:
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
