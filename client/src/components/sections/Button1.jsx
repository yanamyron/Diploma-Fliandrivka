import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Enrole = styled.button`
  height: 65px;
  width: 200px;
  border-radius: 50%;
  background: #002155;
  color: #f3eeea;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  margin-top: 50px;
`;

const Buutton1 = ({ text, to }) => {
  return (
    <Link to={to}>
      <Enrole>{text}</Enrole>
    </Link>
  );
};

export default Buutton1;
