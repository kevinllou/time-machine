import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Time Machine</h1>
      </div>
      <nav className="header__primaryNav">
        <ul className="header__primaryNavList">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'header--activeLink' : '')}
          >
            Time Machine

          </NavLink>
          <NavLink to="/phase2" className={({ isActive }) => (isActive ? 'header--activeLink' : '')}>Tic Tac Toe</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
