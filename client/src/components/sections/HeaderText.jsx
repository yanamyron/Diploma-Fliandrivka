import React from 'react';
import styled from 'styled-components';
import ButtonEnroleIn from '../ButtonEnroleIn';

const HeaderMain = styled.h1`
  font-size: 3em;
  font-family: sans-serif;
  color: #002155;
  max-width: 100%;
   @media screen and (max-width:1000px) {
    margin-top:2rem;
  }
`;

const HeaderSubTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  margin-top: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  width: 100%;
  font-family: 'montserrat', sans-serif;
 
`;

const HeaderTextContainer = styled.div`
  text-align: left;
`;

const HeaderText = () => {
  return (
    <HeaderTextContainer>
      <HeaderMain>
        Гончарна студія "Фляндрівка"
      </HeaderMain>
      <HeaderSubTitle>Hавчимо творити красу власними руками</HeaderSubTitle>
      <ButtonEnroleIn text="Записатися" to="/mainEnrole" />
    </HeaderTextContainer>
  );
};

export default HeaderText;
