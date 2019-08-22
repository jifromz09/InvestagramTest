//authentication

import {APIKey} from '../../auth/auth';

export const CREATE_REQUEST_TOKEN = `https://api.themoviedb.org/3/authentication/token/new?api_key=${APIKey}`;

export const CREATE_SESSION_WITH_LOGIN = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${APIKey}`;

//movies
export const GET_TRENDING_MOVIES = time_window => {
  return `https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${APIKey}`;
};

export const GET_MOVIE_DETAILS = movie_id => {
  return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=en-US`;
};

export const GET_MOVIE_REVIEWS = params => {
  return `https://api.themoviedb.org/3/movie/${
    params.movie_id
  }/reviews?api_key=${APIKey}&language=en-US&page=${params.page}`;
};

export const POST_MOVIE_RATING = params => {
  console.log(params);
  return `https://api.themoviedb.org/3/movie/${params.movie_id}/rating?api_key=${APIKey}&session_id=${params.session_id}`;
};

export const DELETE_MOVIE_RATING = params => {
  return `https://api.themoviedb.org/3/movie/${params.movie_id}/rating?api_key=${APIKey}&session_id=${params.session_id}`;
};

export const CREATE_SESSION_ID_REQUEST = `https://api.themoviedb.org/3/authentication/session/new?api_key=${APIKey}`;

export const ADD_TO_WATCHLIST = session_id => {
  return `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=${APIKey}&session_id=${session_id}`;
};

export const GET_WATCH_LIST = params => {
  return `
  https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=${APIKey}&language=en-US&session_id=${params.session_id}&sort_by=created_at.asc&page=${params.page}`;
}


export const SEARCH_MOVIE = params =>{
  return `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${params.query}&page=${params.page}&include_adult=false&year=${params.year}`
}