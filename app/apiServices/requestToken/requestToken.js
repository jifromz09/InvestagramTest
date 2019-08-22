const axios = require('axios');

import {CREATE_REQUEST_TOKEN} from '../apis/apis';

const api = CREATE_REQUEST_TOKEN;

export default (requestToken = () => {
  return axios
    .get(api)
    .then(res => res.data)
    .then(err => err);
});
