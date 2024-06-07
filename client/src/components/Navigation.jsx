import React, { useState } from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import "./Navigation.css";

// Загальний стиль для пунктів меню та посилань
const MenuItem = styled.div`
  margin: 0 1rem;
  color: #f3eeea;
  cursor: pointer;
  position: relative;
  display: block; /* Додає властивість для відображення блоку */
  text-decoration: none; /* Прибирає підкреслення для посилань */
  &:after {
    content: " ";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #f3eeea;
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Функція для прокручування до елементів на сторінці
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setMenuOpen(false); // Закриває меню після навігації
  };

  return (
    <>
      <nav>
        <MenuItem as={Link} to="/" className="title">
          
        </MenuItem>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <MenuItem onClick={() => scrollTo("home")}>Головна</MenuItem>
          </li>
          <li>
            <MenuItem onClick={() => scrollTo("about")}>Про нас</MenuItem>
          </li>
          <li>
            <MenuItem as={Link} to="/catalog" onClick={() => setMenuOpen(false)}>
              Каталог
            </MenuItem>
          </li>
          <li>
            <MenuItem onClick={() => scrollTo("reviews")}>Відгуки</MenuItem>
          </li>
          <li>
            <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
          </li>
          <li>
            <MenuItem onClick={() => scrollTo("foot")}>Контакти</MenuItem>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};

export default Navigation;
