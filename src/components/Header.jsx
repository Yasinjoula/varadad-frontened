import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/varadad.jpg" alt="وراداد" className="logo-image" />
          <h1>وراداد</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/laws">فهرست قوانین</Link>
          </li>
          <li>
            <Link to="/search">جستجو</Link>
          </li>
          <li>
            <Link to="/admin">بخش مدیریت</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 