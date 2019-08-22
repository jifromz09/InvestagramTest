const axios = require('axios');

import {GET_WATCH_LIST} from '../apis/apis';

export default (getWatchList = (params) => {
  const api = GET_WATCH_LIST(params);
  return axios
    .get(api)
    .then(res => res.data)
    .then(err => err);
});
