import * as actionTypes from '../../actions/movies/actionTypes/postMovieRating';
const initialState = {
  result: {},
  isSaving: false,
};

export default (addRating = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_MOVIE_RATING:
      return {
        ...state,
        isSaving: true,
      };
    case actionTypes.POST_MOVIE_RATING_FULFILLED:
      return {
        ...state,
        isSaving: false,
        result: action.payload,
      };
    case actionTypes.POST_MOVIE_RATING_REJECTED:
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
