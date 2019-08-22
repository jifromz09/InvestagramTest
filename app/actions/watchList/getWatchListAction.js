import * as actionTypes from "./getWatchListActionTypes";

import getWatchList from '../../apiServices/watchList/watchList';
 

export function getWatchlistRequest(payload) {
  return {
    type: actionTypes.GET_WATCHLIST,
    payload: getWatchList(payload)
  }
}