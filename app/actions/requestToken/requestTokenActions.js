import * as actionTypes from "./requestTokenActionTypes";

import requestToken from '../../apiServices/requestToken/requestToken';
 

export function fetchRequestToken() {
  return {
    type: actionTypes.REQUEST_TOKEN,
    payload: requestToken()
  }
}