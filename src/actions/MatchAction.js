import api from '../utils/api';

import {
  REQUEST_MATCH_LIST,
  RECEIVE_MATCH_LIST,
  RECEIVE_MATCH_LIST_EMPTY,
  CLEAR_MATCH_LIST
} from './types';

export const requestMatchList = page => (
  { type: REQUEST_MATCH_LIST, payload: page }
);

export const receiveMatchList = matches => (
  { type: RECEIVE_MATCH_LIST, payload: matches }
);

export const receiveMatchEmpty = () => (
  { type: RECEIVE_MATCH_LIST_EMPTY }
);

export const clearMatchList = () => (
  { type: CLEAR_MATCH_LIST }
);
export default (accountId, page) => (
  (dispatch) => {
    dispatch(requestMatchList(page));
    return api.getMatches(accountId, page).then((data) => {
      if (data.length === 0) {
        dispatch(receiveMatchEmpty());
      } else {
        dispatch(receiveMatchList(data));
      }
    }).catch((error) => {
      console.log(`Action - FETCH MATCHES ERROR - ${error}`);
      dispatch(receiveMatchEmpty());
    });
  }
);
