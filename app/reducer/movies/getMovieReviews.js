import * as actionTypes from '../../actions/movies/actionTypes/movieReviews';
const initialState = {
  movieReviews: [],
  isFetching: true,
};

export default (movieReviews = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_REVIEWS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_MOVIE_REVIEWS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        movieReviews: action.payload,
      };
    case actionTypes.FETCH_MOVIE_REVIEWS_REJECTED:
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
