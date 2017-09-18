import axios from 'axios';

const apiUrl = 'https://api.opendota.com/api/';

const fetchFromApi = endpoint => axios.get(apiUrl + endpoint).then(response => response.data);

// Constants to be used in various endpoints
const recentMatchLimit = 30;

class Api {
  searchPlayers = text => fetchFromApi(`search?q=${text}&similarity=0.9`);

  getRecentMatches = accountId => fetchFromApi(`players/${accountId}/matches?limit=${recentMatchLimit}`);
}


export default new Api();
