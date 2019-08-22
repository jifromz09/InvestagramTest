import * as actionTypes from '../../actions/movies/actionTypes/searchMovie';
const initialState = {
  result: {},
  isFetching: false,
};

export default (movieSearch = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.SEARCH_MOVIE_FULFILLED:
      return {
        ...state,
        isFetching: false,
        result: action.payload,
      };
    case actionTypes.SEARCH_MOVIE_REJECTED:
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
