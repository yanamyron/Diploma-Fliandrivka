import React from 'react';
import styled from 'styled-components'
import HeaderText from './HeaderText';
import CoverMain from '../CoverMain';

const SectionMain = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight}) `};
  width:100vw;
  position:relative;
  background-color:#f3eeea;
`

const Container = styled.div`
  width:100%;
  min-height:35vw;
  margin: 0 auto;
  background-color:#f3eeea;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Box = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media screen and (min-width: 768px) {
    width:50%;
  }
`

const Home = () => {
    return (
        <SectionMain id="home">
            <Container>
                <Box><HeaderText /></Box>
                <Box><CoverMain /></Box>
            </Container>
        </SectionMain>
    )
};

export default Home;
