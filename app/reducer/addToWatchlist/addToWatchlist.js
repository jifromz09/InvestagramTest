import * as actionTypes from '../../actions/watchList/addToWatchListActionTypes';

const initialState = {
  addToWatchListResult: {},
  isSaving: false,
};

export default (addToWatchlist = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        isSaving: true,
      };
    case actionTypes.ADD_TO_WATCHLIST_FULFILLED:
      return {
        ...state,
        isSaving: false,
        addToWatchListResult: action.payload,
      };
    case actionTypes.ADD_TO_WATCHLIST_REJECTED:
      return {
        ...state,
        isSaving: false,
        error: true,
      };
    default:
      break;
  }
  return state;
});
