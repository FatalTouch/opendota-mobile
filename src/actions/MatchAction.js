import api from '../utils/api';

import {
  REQUEST_MATCH_LIST,
  RECEIVE_MATCH_LIST,
  RECEIVE_MATCH_LIST_EMPTY
} from './types';

export const requestMatchList = () => (
  { type: REQUEST_MATCH_LIST }
);

export const receiveMatchList = matches => (
  { type: RECEIVE_MATCH_LIST, payload: matches }
);

export const receiveMatchEmpty = () => (
  { type: RECEIVE_MATCH_LIST_EMPTY }
);

export default accountId => (
  (dispatch) => {
    dispatch(requestMatchList());
    return api.getRecentMatches(accountId).then((data) => {
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
