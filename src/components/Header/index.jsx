import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { signOut } from 'firebase/auth';
import Logo from './Logo';
import './styles.scss';
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          {user ? (
            <>
              <Link to="/favorites" className="nav-link">Favorites</Link>
              <button onClick={handleLogout} className="nav-button">Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-button get-started">Get Started</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
