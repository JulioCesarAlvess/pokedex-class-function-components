import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

class ApiService {
  constructor(apiurl) {
    this.apiurl = apiurl;
  }

  get(url) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl);
  }
}

export default ApiService;
