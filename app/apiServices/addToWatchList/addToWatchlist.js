const axios = require('axios');

import {ADD_TO_WATCHLIST} from '../apis/apis';

export default (addToWatchlist = params => {
  const api = ADD_TO_WATCHLIST(params.session_id);
  return axios
    .post(api, {
        "media_type": params.media_type,
        "media_id": params.movie_id,
        "watchlist": params.isWatchlist
      })
    .then(res => res.data)
    .then(err => err);
});
