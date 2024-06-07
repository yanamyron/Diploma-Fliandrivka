import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnEnroleIn = styled(Link)`
  display: inline-block;
  background-color: #002155;
  color: #f3eeea;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontmd};
  padding: 2rem 3rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  position: relative;
  margin-right: auto;
  text-decoration: none;
  text-align: center;

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #002155;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const ButtonEnroleIn = ({ text, to }) => {
  return (
   <BtnEnroleIn to={to}>{text}
   </BtnEnroleIn>
   )
};

export default ButtonEnroleIn;


