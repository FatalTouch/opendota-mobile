import axios from 'axios';
import _ from 'lodash';

const apiUrl = 'https://api.opendota.com/api/';

const fetchFromApi = endpoint => axios.get(apiUrl + endpoint).then(response => response.data);

// Constants to be used in various endpoints
const matchLimit = 30;

class Api {
  searchPlayers = text => fetchFromApi(`search?q=${text}&similarity=0.9`);

  // getRecentMatches = accountId => fetchFromApi(`players/${accountId}/matches?limit=${matchLimit}`);

  getMatches = (accountId, page) => {
    const offset = page * matchLimit;
    return fetchFromApi(`players/${accountId}/matches?limit=${matchLimit}&offset=${offset}`);
  };

  getSummary = (accountId) => {
    const stats = fetchFromApi(`players/${accountId}`);
    const wl = fetchFromApi(`players/${accountId}/wl`);
    return Promise.all([stats, wl]).then(() => _.merge(wl, stats));
  };

  getHeroes = accountId => (fetchFromApi(`players/${accountId}/heroes`));
}


export default new Api();
