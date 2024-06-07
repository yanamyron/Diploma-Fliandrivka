import React from 'react';
import styled from 'styled-components';
import aboutus from '../assets/aboutus.png';

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  width: 87%;
  height: auto;
  @media screen and (min-width: 768px) {
    order: -1;
    margin-right: 20px; 
  }
`;

function AboutUsIMG() {
  return (
    <PhotoContainer>
        <img src={aboutus} alt="About Us" />
    </PhotoContainer>
  );
}

export default AboutUsIMG;
