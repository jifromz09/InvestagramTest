import * as actionTypes from '../../actions/watchList/getWatchListActionTypes';
const initialState = {
  watchlist: [],
  isFetching: true,
};

export default (watchlist = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WATCHLIST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_WATCHLIST_FULFILLED:
      return {
        ...state,
        isFetching: false,
        watchlist: action.payload,
      };
    case actionTypes.GET_WATCHLIST_REJECTED:
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
