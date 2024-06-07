import React from 'react';
import styled from 'styled-components';
import starterpage1 from '../assets/starter page2.jpg';

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px auto;
  
  @media screen and (min-width: 768px) {
    width: auto;
    margin: 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

function CoverMain() {
  return (
    <PhotoContainer>
      <StyledImg src={starterpage1} alt="Starter Page" />
    </PhotoContainer>
  );
}

export default CoverMain;
