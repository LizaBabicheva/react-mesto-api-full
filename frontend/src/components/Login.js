import { useState } from "react";

function Login({ onLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email,
      password
    });
  }

  return (
    <section className="sign">
      <h2 className="sign__heading">Вход</h2>
      <form className="sign__form"
        onSubmit={handleSubmit}>
        <label className="sign__input-label">
          <input className="sign__input popup__input" type="email" placeholder="Email" id="input-login-email" name="login-email" required
            value={email} onChange={handleEmailChange}></input>
          <span className="sign__error popup__error"></span>
        </label>
        <label className="sign__input-label">
          <input className="sign__input popup__input" type="password" placeholder="Пароль" id="input-login-password" name="login-password" required
            value={password} onChange={handlePasswordChange}></input>
          <span className="sign__error popup__error"></span>
        </label>
        <button className="sign__submit popup__save-button" type="submit" aria-label="Войти">Войти</button>
      </form>
    </section>
  )
}

export default Login;