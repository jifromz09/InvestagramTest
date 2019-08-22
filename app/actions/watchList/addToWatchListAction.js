import * as actionTypes from "./addToWatchListActionTypes";

import addToWatchlist from '../../apiServices/addToWatchList/addToWatchlist';
 

export function addToWatchlistRequest(payload) {
  return {
    type: actionTypes.ADD_TO_WATCHLIST,
    payload: addToWatchlist(payload)
  }
}