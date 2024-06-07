import React from 'react';
import styled from 'styled-components';
import Facebook from '../Icons/Facebook.js';
import Instagram from '../Icons/Instagram.js';
import LinkedIn from '../Icons/LinkedIn.js';
import Catalog from '../pages/Catalog.jsx';
import { Link, Routes, Route } from 'react-router-dom';

// Основний контейнер для футера
const SectionFooter = styled.section`
  min-height: 30vh;
  width: 100%;
  background-color: #002155;
  color: #f3eeea;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 670px) {
    padding: 1rem 0;
  }
`;

// Контейнер для основних елементів футера
const ContainerF = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Для забезпечення переносу елементів */
  margin-bottom: 2rem;

  @media (max-width: 670px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

// Колонка з іконками соціальних мереж
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 670px) {
    margin-bottom: 1rem;
  }
`;

// Список іконок
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

// Список меню
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0 1rem;
  align-items: center;

  @media (max-width: 670px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr); /* Додаткові зміни для маленьких екранів */
    text-align: center;
    padding: 0 1rem;
  }
`;

// Окремий елемент меню
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: #f3eeea;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 670px) {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem; /* Додатковий простір між елементами */
  }
`;

// Стиль для посилань
const StyledLink = styled(Link)`
  margin: 0 1rem;
  color: #f3eeea;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  
  &:after {
    content: ' ';
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

  @media (max-width: 670px) {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0; /* Додатковий простір між елементами */
  }
`;

// Контейнер для копірайту
const CopyRight = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: left;
  justify-content: center; /* Центрує текст копірайту */

  @media (max-width: 670px) {
    text-align: center;
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <>
      <SectionFooter id="foot">
        <ContainerF>
          <LeftCol>
            <IconList>
              <a href="http://facebook.com" target='_blank' rel="noopener noreferrer"><Facebook /></a>
              <a href="http://instagram.com" target='_blank' rel="noopener noreferrer"><Instagram /></a>
              <a href="http://linkedin.com" target='_blank' rel="noopener noreferrer"><LinkedIn /></a>
            </IconList>
          </LeftCol>
          <MenuItems>
            <Item onClick={() => scrollTo('home')}>Головна</Item>
            <Item onClick={() => scrollTo('about')}>Про нас</Item>
            <StyledLink to="/catalog">Каталог</StyledLink>
            <Item onClick={() => scrollTo('reviews')}>Відгуки</Item>
            <Item onClick={() => scrollTo('faq')}>FAQ</Item>
          </MenuItems>
        </ContainerF>
        <CopyRight>
          © {new Date().getFullYear()} Всі права захищені.
        </CopyRight>
      </SectionFooter>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};

export default Footer;
