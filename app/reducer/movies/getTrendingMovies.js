import * as actionTypes from '../../actions/movies/actionTypes/trendingMovies';
import { chunk} from 'lodash'; 
const initialState = {
  trendingMovies: [],
  isFetching: true,
};

export default (trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRENDING_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_TRENDING_MOVIES_FULFILLED:
      // let newMovieArr = chunk(action.payload.results, 2);
      // action.payload.results = newMovieArr;
      // console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        trendingMovies: action.payload,
      };
    case actionTypes.FETCH_TRENDING_MOVIES_REJECTED:
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
