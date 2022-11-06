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
      headers: this._headers,
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  setApiUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
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
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  deleteCardApi(id) {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  changeAvatarApi(data) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
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
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: 'c179d740-9268-4b35-9d12-1fa2b2480a1b',
    'Content-Type': 'application/json'
  }
});

export default api;