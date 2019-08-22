import * as actionTypes from './loginActionTypes';

import userAuth from '../../apiServices/login/userLogin';

export function userLogin(payload) {
  return {
    type: actionTypes.USER_LOGIN,
    payload: userAuth(payload)
  }
}

// userLogin => dispatch => params => {
//   return userAuth(params).then(res => dispatch(''));
// };

 
