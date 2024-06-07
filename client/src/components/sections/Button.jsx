import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Enrole = styled.button`
  height: 65px;
  width: 200px;
  border-radius: 50%;
  background: #f3eeea;
  color: #002155;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
`;

const Button = ({ text, to }) => {
  return (
    <>
      <Link to={to}>
        <Enrole>{text}</Enrole>
      </Link>
    </>
  );
};

export default Button;
