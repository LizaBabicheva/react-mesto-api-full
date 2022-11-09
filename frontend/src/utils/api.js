class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getApiUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  setApiUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  addNewCardApi(data) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  changeLikeApi(id, like) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: like ? 'PUT' : 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  deleteCardApi(id) {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  changeAvatarApi(data) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}

const api = new Api({
  baseUrl: 'https://api.mesto.lizababicheva.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;