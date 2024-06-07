import React from 'react';
import styled from 'styled-components';
import AboutUsIMG from '../AboutUsIMG';
import AboutUsText from '../AboutUsText';

const SectionAboutUs = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #f3eeea;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 6rem;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const AboutUs = () => {
    return (
        <SectionAboutUs id ="about">
            <Container>
                <Box><AboutUsText /></Box>
                <Box><AboutUsIMG /></Box>
            </Container>
        </SectionAboutUs>
      )
};

export default AboutUs;
