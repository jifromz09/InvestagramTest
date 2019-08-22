import * as actionTypes from '../../actions/movies/actionTypes/deleteMovieRating';
const initialState = {
  result: {},
  isDeleting: true,
};

export default (deleteMovieRating = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_MOVIE_RATINGS:
      return {
        ...state,
        isDeleting: true,
      };
    case actionTypes.DELETE_MOVIE_RATINGS_FULFILLED:
      return {
        ...state,
        isDeleting: false,
        result: action.payload,
      };
    case actionTypes.DELETE_MOVIE_RATINGS_REJECTED:
      return {
        ...state,
        isDeleting: false,
        error: true,
      };
    default:
      break;
  }
  return state;
});
