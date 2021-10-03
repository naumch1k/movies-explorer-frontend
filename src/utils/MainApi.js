import { BASE_URL } from './constants';

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  register({ email, password, name }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
    .then(this._handleResponse);
  }

  authorize({ email, password}) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(this._handleResponse);
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._handleResponse);
  }

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
  
export default mainApi;
