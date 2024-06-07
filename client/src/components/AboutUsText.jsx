import React from 'react';
import styled from 'styled-components';

const AboutUsTitle = styled.h2`
  font-size: 4rem;
  font-family: 'play', sans-serif;
  color: #002155;
  max-width: 100%;
  margin-bottom: 2rem;
`;

const AboutUsSubTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  margin-top: 1rem;
  font-weight: 600;
  margin-bottom: 3rem;
  width: 100%;
  font-family: 'montserrat', sans-serif;
`;

const AboutUsTextContainer = styled.div`
  text-align: left;
`;

function AboutUsText() {
  return (
    <AboutUsTextContainer>
      <AboutUsTitle>
        Про нас :)
      </AboutUsTitle>
      <AboutUsSubTitle>
        "Фляндрівка" - це простір для творчості, який відкриває свої двері всім охочим, хто хоче творити своїми руками красу.
      </AboutUsSubTitle>
      <AboutUsSubTitle>
        Студія заснована у 2019 році та за цей час обзавелася майстрами, які знаються як на гончарстві, так і на ліпці з глини. Радо навчать цьому вас та вашу малечу.
      </AboutUsSubTitle>
      <AboutUsSubTitle>
        Ми радо допоможемо вам втілити ваші задуми в життя та створити унікальний та неповторний посуд або прикраси для дому своїми руками. Наші вироби обпалюються в гончарних печах, аби зліплені вами предмети могли використовуватись у повсякденному житті та нагадувати вам про чудовий досвід у створенні цієї краси.
      </AboutUsSubTitle>
    </AboutUsTextContainer>
  );
}

export default AboutUsText;
