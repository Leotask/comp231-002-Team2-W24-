import React from 'react';
import { Home,Table, Users, Folder, Info} from 'react-feather'; 
import { Link } from 'react-router-dom';
import { TbTournament } from "react-icons/tb";
import logo from './logo.png';
import './navbar.css'

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo" src={logo} alt="logo" ></img>
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
        <li className="navbar__item">
  <Link to="/" className="navbar__link"> <Home /><span>Home</span></Link>
</li>
          <li className="navbar__item">
          <Link to="/fixtures" className="navbar__link"><Table /><span>Fixtures</span></Link>
          </li>
          <li className="navbar__item">
            <Link to="/team" className="navbar__link"><Users /><span>Team</span></Link>
          </li>
          <li className="navbar__item">
          <Link to="/policy" className="navbar__link"><Folder /><span>Policy</span></Link>
          </li>
          <li className="navbar__item">
            <Link to="/tournament" className="navbar__link"><TbTournament /><span>Tournament</span></Link>
          </li>
          <li className="navbar__item">
          <Link to="/about" className="navbar__link"><Info /><span>About</span></Link>
          </li>
          <li className="navbar__item">
            <Link to="/signin" className="navbar__link sign-in-button"><span>Sign In</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}



