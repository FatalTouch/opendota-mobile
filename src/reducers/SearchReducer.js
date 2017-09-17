import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_SEARCH_EMPTY
} from '../actions/types';

const INITIAL_STATE = { isSearching: false, isSearchEmpty: false, searchResult: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return { ...state, isSearching: true };
    case RECEIVE_SEARCH_RESULTS:
      console.log('received');
      return { ...state, searchResult: action.payload, isSearchEmpty: false, isSearching: false };
    case RECEIVE_SEARCH_EMPTY:
      return { ...state, isSearchEmpty: true, isSearching: false };
    default:
      return state;
  }
};
