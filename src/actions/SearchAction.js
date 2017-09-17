import api from '../utils/api';

import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_SEARCH_EMPTY
} from './types';

export const requestSearch = () => (
  { type: REQUEST_SEARCH }
);

export const receiveSearchResults = players => (
  { type: RECEIVE_SEARCH_RESULTS, payload: players }
);

export const receiveSearchEmpty = () => (
  { type: RECEIVE_SEARCH_EMPTY }
);

export default playerName => ((dispatch) => {
  dispatch(requestSearch());
  return api.searchPlayers(playerName).then((data) => {
    console.log(data);
    if (data.length === 0) {
      dispatch(receiveSearchEmpty());
    } else {
      // const results = data.slice(0, 40); // Take only first 40 results
      dispatch(receiveSearchResults(data));
    }
  }).catch((error) => {
    console.log(`Action - FETCH PLAYERS ERROR - ${error}`);
  });
});
