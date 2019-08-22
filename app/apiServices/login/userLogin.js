import axios from 'axios';

import {CREATE_SESSION_WITH_LOGIN} from '../apis/apis';

const api = CREATE_SESSION_WITH_LOGIN;

export default param => {
  return axios
    .post(api, {
      username: param.uname,
      password: param.pword,
      request_token: param.requestToken,
    })
    .then(res => res.data)
    .catch(err => err.data);
};
