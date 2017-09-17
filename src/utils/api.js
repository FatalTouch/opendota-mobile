import axios from 'axios';

const apiUrl = 'https://api.opendota.com/api/';

class Api {
  searchPlayers = text => axios.get(`${apiUrl}search?q=${text}&similarity=0.9`).then(response => response.data);
}


export default new Api();
