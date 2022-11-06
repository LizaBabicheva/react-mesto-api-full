import { useState } from "react";
import { Link } from 'react-router-dom';

function Register({ onRegister }) {

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
    onRegister({
      email, 
      password
    });
  }

  return (
    <section className="sign register">
      <h2 className="sign__heading">Регистрация</h2>
      <form className="sign__form"
        onSubmit={handleSubmit}>
        <label className="sign__input-label">
          <input className="sign__input popup__input" type="email" placeholder="Email" id="input-register-email" name="register-email" required
            value={email} onChange={handleEmailChange}></input>
          <span className="sign__error popup__error"></span>
        </label>
        <label className="sign__input-label">
          <input className="sign__input popup__input" type="password" placeholder="Пароль" id="input-register-password" name="register-password" required
            value={password} onChange={handlePasswordChange}></input>
          <span className="sign__error popup__error"></span>
        </label>
        <button className="sign__submit popup__save-button" type="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
      </form>
      <div className="signin-block">
        <p className="signin-block__text">Уже зарегистрированы?&nbsp;</p>
        <Link to="/sign-in" className="signin-block__link">Войти</Link>
      </div>
    </section>
  )
}

export default Register;