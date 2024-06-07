import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#002155', color: '#f3eeea' }}>
      <div className="container">
        <div className="navbar-brand">
          <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item" onClick={navigateToHome} style={{ backgroundColor: '#f3eeea', color: '#002155' }}>
              На головну
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={Logout} className="button" style={{ backgroundColor: '#f3eeea', color: '#002155' }}>
                  Вихід
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
