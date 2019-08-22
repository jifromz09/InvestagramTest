import axios from 'axios';

import {
  GET_TRENDING_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_REVIEWS,
  POST_MOVIE_RATING,
  DELETE_MOVIE_RATING,
  SEARCH_MOVIE,
} from '../apis/apis';

export const getTrendingMovies = param => {
  const api = GET_TRENDING_MOVIES(param.time_window);
  return axios
    .get(api)
    .then(res => res.data)
    .catch(err => err.data);
};

export const getMovieDetails = params => {
  const api = GET_MOVIE_DETAILS(params);
  return axios
    .get(api)
    .then(res => res.data)
    .catch(err => err.data);
};

export const getMovieReviews = params => {
  const api = GET_MOVIE_REVIEWS(params);
  return axios
    .get(api)
    .then(res => res.data)
    .catch(err => err.data);
};

export const postMovieRating = params => {
  const api = POST_MOVIE_RATING(params);
  return axios
    .post(api, {
      value: params.bodyValue,
    })
    .then(res => res.data)
    .catch(err => err.data);
};

export const removeMovieRating = params => {
  const api = DELETE_MOVIE_RATING(params);
  return axios
    .delete(api)
    .then(res => res.data)
    .catch(err => err.data);
};

export const searchMovie = params => {
  const api = SEARCH_MOVIE(params);
  return axios
    .get(api)
    .then(res => res.data)
    .catch(err => err.data);
};

//WRAPPER HERE SOON!!!
