const axios = require('axios');

import {CREATE_SESSION_ID_REQUEST} from '../apis/apis';

const api = CREATE_SESSION_ID_REQUEST;

export default (createSessionIdRequest = request_token => {
  return axios
    .post(api, {
      request_token: request_token,
    })
    .then(res => res.data)
    .then(err => err);
});
