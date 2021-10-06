import { MOVIES_API } from './constants';

class MoviesApi {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  
  _handleResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json())
        .then((data) => {
          return { data, status: res.status }
        })
    }
    return Promise.reject(res.status);
  }
  
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._handleResponse);
  };
};
  
const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
  
export default moviesApi;
