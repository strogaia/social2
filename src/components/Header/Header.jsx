import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
    <img src='https://www.freepnglogos.com/uploads/total-logo-png/total-symbol-of-logo-5.png' 
    alt="does not work"></img>

    <div className = {s.loginBlock}>
      { props.isAuth ? props.login:
      <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header;