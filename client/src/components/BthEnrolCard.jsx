import React from 'react';
import styled from 'styled-components';

const BtnEnrolCard1 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: px;
  background: #f3eeea; /* колір фону */
  color: #002155; /* колір тексту */
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  position: relative;
  margin-right: auto;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #f3eeea; /* колір обрамлення */
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

const BthEnrolCard = ({ text, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <BtnEnrolCard1 alignRight={true} onClick={handleClick}>
      {text}
    </BtnEnrolCard1>
  );
};

export default BthEnrolCard;
