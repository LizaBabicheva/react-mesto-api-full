import logo from '../images/logo.svg';
import React from 'react';
import { Link, Route } from 'react-router-dom';

function Header({ email, onSignout }) {

  return (
    <header className="header">
      <a href="#"><img className="header__logo" src={logo} alt="Лого" /></a>
      <nav className="menu">
        <Route exact path="/">
          <h2 className="menu__email">{email}</h2>
          <button className="menu__link menu__button"
            onClick={onSignout}>Выйти</button>
        </Route>

        <Route path="/sign-in">
          <Link className="menu__link" to="/sign-up">Регистрация</Link>
        </Route>

        <Route path="/sign-up">
          <Link className="menu__link" to="/sign-in">Войти</Link>
        </Route>
      </nav>
    </header>
  )
}

export default Header;