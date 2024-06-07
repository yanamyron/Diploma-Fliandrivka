import React from 'react'
import styled from 'styled-components';
import Nav from '../components/Navigate';
import Footer from '../components/Footer';
import AcordeonFAQ from '../components/AcordeonFAQ';
import Button from '../components/sections/Button';
import GoncharstvoGroup from '../components/forms/GoncharstvoGroup';
import GoncharstvoSplit from '../components/forms/GoncharstvoSplit';
import Goncharstvoindividual from '../components/forms/Goncharstvoindividual'; 
import LipkaGroup from '../components/forms/LipkaGroup';
import LipkaIndividual from '../components/forms/LipkaIndividual';
import LipkaSplit from '../components/forms/LipkaSplit';
import Masterclass1 from '../components/forms/Masterclass1';
import Masterclass2 from '../components/forms/Masterclass2';
import SertificateLipka from '../components/forms/SertificateLipka';
import SertificateGoncharstvo from '../components/forms/SertificateGoncharstvo';
import { Routes, Route } from 'react-router-dom';

const PageContainer = styled.div`
  background: #f3eeea;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CatalogCont = styled.div`
margin:30px;
background:#f3eeea;
`;

const SessionsCard = styled.div`
background-color: #002155;
color: #f3eeea;
display: inline-flex;
flex-direction: column;
width:350px; 
height:560px;
margin-right: 20px;
margin-top:30px;

`;

const SessionsCardTitle = styled.div`
text-align:center;
margin-top:20px;
font-family:'play',sans-serif;
font-size: 22px;
`;

const AboutSession = styled.div`
width:90%;
text-align:left;
margin-left:20px ;
margin-top:2rem;
`;

const Description = styled.p`
margin-bottom: 15px;
`;

const CardCat = styled.div`
display: flex;
  justify-content: center; /* Вирівнює елементи по центру горизонтально */
  align-items: center;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

const BthEnrolContainer = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  height:200px;
  margin-top:40px;
  @media screen and (max-width: 840px) {
    margin-top:40px;
  }
`;

const Catalog = () => {
  return (
    <PageContainer >
    <Nav />
   
    <CatalogCont>
       
        <AcordeonFAQ title ="Гончарство"> 
        <CardCat>
        <SessionsCard>
            <SessionsCardTitle>Групове заняття</SessionsCardTitle>
            <AboutSession>
            <Description>Проходить у групках від 3-ох до 6-ти
             чоловік.</Description>
            <Description> Тривалість заняття від 2 год до 3 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 800 грн.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/goncharstvogroup" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>

       <SessionsCard>
            <SessionsCardTitle>Парне заняття</SessionsCardTitle>
            <AboutSession>
            <Description>Заняття проходить у двох.</Description>
            <Description> Тривалість заняття від 1.5 год до 2.5 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description></Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 1200 грн з двох.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/goncharstvosplit" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>

       <SessionsCard>
            <SessionsCardTitle>Індивідуальне</SessionsCardTitle>
            <AboutSession>
            <Description>Заняття проходить наодинці з майстром.</Description>
            <Description> Тривалість заняття від 1.5 год до 2.5 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 1500 грн.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to ="/goncharstvoindividual" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard></CardCat>
</AcordeonFAQ>

        <AcordeonFAQ title ="Ліпка">
        <CardCat>
        <SessionsCard>
            <SessionsCardTitle>Групове заняття</SessionsCardTitle>
            <AboutSession>
            <Description>Проходить у групках від 3-ох до 6-ти
             чоловік.</Description>
            <Description> Тривалість заняття від 2 год до 3 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 600 грн.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/lipkagroup" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
       <SessionsCard>
            <SessionsCardTitle>Парне заняття</SessionsCardTitle>
            <AboutSession>
            <Description>Заняття проходить у двох.</Description>
            <Description> Тривалість заняття від 1.5 год до 2.5 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description></Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 1000 грн з двох.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/lipkasplit" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
       <SessionsCard>
            <SessionsCardTitle>Індивідуальне</SessionsCardTitle>
            <AboutSession>
            <Description>Заняття проходить наодинці з майстром.</Description>
            <Description> Тривалість заняття від 1.5 год до 2.5 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 1500 грн.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to ="/lipkaindividual" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
        </CardCat>
        </AcordeonFAQ>

        <AcordeonFAQ title ="Майстер-класи">
            <CardCat>
        <SessionsCard>
            <SessionsCardTitle>Різьблення</SessionsCardTitle>
            <AboutSession>
            <Description>Проходить у групках від 3-ох до 9-ти
             чоловік.</Description>
            <Description> Тривалість заняття від 2 год до 3 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description>Формуємо виріб з глини й ділі декоруємо виріб 
            вирізьблюючи узори на виробі </Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 700 грн.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/masterclass1" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
       <SessionsCard>
       <SessionsCardTitle>Ліпка ваз нестандартної форми</SessionsCardTitle>
            <AboutSession>
            <Description>Проходить у групках від 3-ох до 6-ти
             чоловік.</Description>
            <Description> Тривалість заняття від 2 год до 3 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Створюєстья один виріб з допомогою майстрів ,після чого він декорується</Description>
            <Description>
            Виріб буде випалено на протязі 5-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість: 800 грн.</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/masterclass2" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
       </CardCat>
        </AcordeonFAQ>

        <AcordeonFAQ title ="Сертифікати">
        <CardCat>
        <SessionsCard>
        <SessionsCardTitle>Гончарство</SessionsCardTitle>
        <AboutSession>
            <Description>Заняття проходить у двох.</Description>
            <Description> Тривалість заняття від 1.5 год до 2.5 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description></Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість:залежит від обраного типу заняття</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/sertificategoncharstvo" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
       <SessionsCard>
            <SessionsCardTitle>Ліпка</SessionsCardTitle>
            <AboutSession>
            <Description>Заняття проходить у двох.</Description>
            <Description> Тривалість заняття від 1.5 год до 2.5 годин.</Description>
            <Description>Можна вибрати з якої глини формуватиметься виріб:
             білої, чорної або кольорової.
            </Description>
            <Description> Можна створити та розмалювати 1-2 роботи 
                (в залежності від складності) або розпочати великий 
                проект.</Description>
            <Description></Description>
            <Description>
            Виріб буде випалено на протязі 3-ох днів після його формування.
            Про його готовність вам повідомлять через повідомлення
            </Description>
            <SessionsCardTitle>Вартість:залежит від обраного типу заняття</SessionsCardTitle>
            <BthEnrolContainer>
            <Button text="Записатися" link to="/sertificatelipka" />
          </BthEnrolContainer>
            </AboutSession>
       </SessionsCard>
       
       </CardCat>
        </AcordeonFAQ>
    </CatalogCont> 
   
    <Footer />

    
    <Routes>
        <Route path="/goncharstvogroup" element={<GoncharstvoGroup />} />
        <Route path="/goncharstvoindividual" element={<Goncharstvoindividual />} />
        <Route path="/goncharstvosplit" element={<GoncharstvoSplit />} />

        <Route path="/lipkagroup" element={<LipkaGroup />} />
        <Route path="/lipkaindividual" element={<LipkaIndividual />} />
        <Route path="/lipkasplit" element={<LipkaSplit />} />
        
        <Route path="/masterclass1" element={<Masterclass1 />} />
        <Route path="/masterclass2" element={<Masterclass2 />} />
        
        <Route path="/sertificategoncharstvo" element={<SertificateGoncharstvo />} />
        <Route path="/sertificatelipka" element={<SertificateLipka />} />
      </Routes>

    </PageContainer>
  )
}

export default Catalog;