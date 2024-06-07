import React, { useState } from "react";
import styled from "styled-components";
import "./Navigation.css";
import { Link, Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";

// Стиль для пунктів меню
const Item = styled.li`
  margin: 0 1rem;
  color: #f3eeea;
  cursor: pointer;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #f3eeea;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

// Стиль для посилань
const StyledLink = styled(Link)`
  margin: 0 1rem;
  color: #f3eeea;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #f3eeea;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Navigate = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Функція для прокручування до елементів на сторінці

  return (
    <>
      <nav>
        <StyledLink to="/" className="title">
         
        </StyledLink>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
          <StyledLink to="/">Головна</StyledLink>
          </li>
          <li>
          <StyledLink to="/">Про нас</StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog" onClick={() => setMenuOpen(false)}>
              Каталог
            </StyledLink>
          </li>
          <li>
          <StyledLink to="/catalog">Каталог</StyledLink>
          </li>
          <li>
          <StyledLink to="/">Відгуки</StyledLink>
          </li>
          <li>
          <StyledLink to="/">FAQ</StyledLink>
          </li>
          <li>
          <StyledLink to="/">Контакти</StyledLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};

export default Navigate;
