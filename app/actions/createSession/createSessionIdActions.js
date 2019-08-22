import * as actionTypes from "./createSessionIdActionTypes";

import createSessionIdRequest from '../../apiServices/createSessionId/createSessionIdRequest';
 
export function requestSessionIdRequest(request_token) {
  return {
    type: actionTypes.CREATE_SESSION_ID,
    payload: createSessionIdRequest(request_token)
  }
}