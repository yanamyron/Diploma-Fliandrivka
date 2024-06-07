import React from "react";
import styled from "styled-components";
import Buutton from "./sections/Button";
import Button from "../components/sections/Button";
import Button1 from "../components/sections/Button1";
import { Routes, Route } from "react-router-dom";
import GoncharstvoGroup from "./forms/GoncharstvoGroup";
import Goncharstvoindividual from "./forms/Goncharstvoindividual";
import GoncharstvoSplit from "./forms/GoncharstvoSplit";
import LipkaGroup from "./forms/LipkaGroup";
import LipkaIndividual from "./forms/LipkaIndividual";
import LipkaSplit from "./forms/LipkaSplit";
import Masterclass1 from "./forms/Masterclass1";
import Masterclass2 from "./forms/Masterclass2";
import SertificateGoncharstvo from "./forms/SertificateGoncharstvo";
import SertificateLipka from "./forms/SertificateLipka";
import { Link } from "react-router-dom";


const CardsBlock = styled.div`
  width: 100%;
  background-color: #002155;
  color: #f3eeea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
`;

const BlockTitle = styled.h1`
  font-family: "play", sans-serif;
  font-size: 2rem;
  padding-top: 3rem;
  text-align: center;
`;

const InfoBlock = styled.div`
  width: 80%;
  background-color: #f3eeea;
  color: #002155;
  margin-top: 2rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2rem;
`;

const Info = styled.div`
  padding-top: 1rem;
  font-size: 20px;
  margin: 5px auto;
  width: 90%;
  text-align: center;
`;

const SessionsCard = styled.div`
  background-color: #002155;
  color: #f3eeea;
  display: inline-flex;
  flex-direction: column;
  max-width: 350px;
  margin-right: 20px;
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SessionsCardTitle = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: "play", sans-serif;
  font-size: 22px;
`;

const AboutSession = styled.div`
  width: 90%;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;
const Info1 = styled.div`
  padding-top: 2.5rem;
  font-size: 20px;
  margin: 5px auto;
  width: 80%;
  text-align: center;
`;
const Info2 = styled.div`
  padding-top: 1rem;
  font-size: 20px;
  margin: 5px auto;
  width: 80%;
  text-align: center;
  @media screen and (max-width: 480px) {
    padding: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Description = styled.p`
  margin-bottom: 15px;
`;

const BthEnrolContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 150px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
const Cards = () => {
  return (
    <>
      <CardsBlock>
        <BlockTitle>Гончарство</BlockTitle>
        <InfoBlock>
          <Info1>
            Гончарство - це старовинне ремесло, коли люди виготовляють посуд
            руками із глини. Вони формують глиняні вироби на гончарному колесі
            або вручну, використовуючи спеціальні інструменти. Потім вироби
            обпалюють у печі, щоб вони стали міцними та водостійкими.{" "}
          </Info1>

          <SessionsCard>
            <SessionsCardTitle>Групове заняття</SessionsCardTitle>
            <AboutSession>
              <Description>
                Проходить у групках від 3-ох до 6-ти чоловік.
              </Description>
              <Description>
                {" "}
                Тривалість заняття від 2 год до 3 годин.
              </Description>
              <Description>
                Можна вибрати з якої глини формуватиметься виріб: білої, чорної
                або кольорової.
              </Description>
              <Description>
                {" "}
                Можна створити та розмалювати 1-2 роботи (в залежності від
                складності) або розпочати великий проект.
              </Description>
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
              <Description>
                {" "}
                Тривалість заняття від 1.5 год до 2.5 годин.
              </Description>
              <Description>
                Можна вибрати з якої глини формуватиметься виріб: білої, чорної
                або кольорової.
              </Description>
              <Description>
                {" "}
                Можна створити та розмалювати 1-2 роботи (в залежності від
                складності) або розпочати великий проект.
              </Description>
              <Description></Description>
              <Description>
                Виріб буде випалено на протязі 3-ох днів після його формування.
                Про його готовність вам повідомлять через повідомлення
              </Description>
              <SessionsCardTitle>Вартість: 1200 грн з двох.</SessionsCardTitle>
              <BthEnrolContainer>
                <Buutton text="Записатися" link to="/goncharstvosplit" />
              </BthEnrolContainer>
            </AboutSession>
          </SessionsCard>
          <SessionsCard>
            <SessionsCardTitle>Індивідуальне</SessionsCardTitle>
            <AboutSession>
              <Description>Заняття проходить наодинці з майстром.</Description>
              <Description>
                {" "}
                Тривалість заняття від 1.5 год до 2.5 годин.
              </Description>
              <Description>
                Можна вибрати з якої глини формуватиметься виріб: білої, чорної
                або кольорової.
              </Description>
              <Description>
                {" "}
                Можна створити та розмалювати 1-2 роботи (в залежності від
                складності) або розпочати великий проект.
              </Description>
              <Description>
                Виріб буде випалено на протязі 3-ох днів після його формування.
                Про його готовність вам повідомлять через повідомлення
              </Description>
              <SessionsCardTitle>Вартість: 1500 грн.</SessionsCardTitle>
              <BthEnrolContainer>
                <Buutton text="Записатися" link to="/goncharstvoindividual" />
              </BthEnrolContainer>
            </AboutSession>
          </SessionsCard>
        </InfoBlock>

        <BlockTitle>Ліпка</BlockTitle>
        <InfoBlock>
          <Info1>
            Ліпка з глини - це процес формування фігур або об'єктів із глини
            руками без використання гончарного колеса. Ліплять зазвичай за
            допомогою рук, але можуть використовувати й інші інструменти, такі
            як ножі або різці.
          </Info1>
          <SessionsCard>
            <SessionsCardTitle>Групове заняття</SessionsCardTitle>
            <AboutSession>
              <Description>
                Проходить у групках від 3-ох до 6-ти чоловік.
              </Description>
              <Description>
                {" "}
                Тривалість заняття від 2 год до 3 годин.
              </Description>
              <Description>
                Можна вибрати з якої глини формуватиметься виріб: білої, чорної
                або кольорової.
              </Description>
              <Description>
                {" "}
                Можна створити та розмалювати 1-2 роботи (в залежності від
                складності) або розпочати великий проект.
              </Description>
              <Description>
                Виріб буде випалено на протязі 3-ох днів після його формування.
                Про його готовність вам повідомлять через повідомлення
              </Description>
              <SessionsCardTitle>Вартість: 600 грн.</SessionsCardTitle>
              <BthEnrolContainer>
                <Buutton text="Записатися" link to="/lipkagroup" />
              </BthEnrolContainer>
            </AboutSession>
          </SessionsCard>
          <SessionsCard>
            <SessionsCardTitle>Парне заняття</SessionsCardTitle>
            <AboutSession>
              <Description>Заняття проходить у двох.</Description>
              <Description>
                {" "}
                Тривалість заняття від 1.5 год до 2.5 годин.
              </Description>
              <Description>
                Можна вибрати з якої глини формуватиметься виріб: білої, чорної
                або кольорової.
              </Description>
              <Description>
                {" "}
                Можна створити та розмалювати 1-2 роботи (в залежності від
                складності) або розпочати великий проект.
              </Description>
              <Description></Description>
              <Description>
                Виріб буде випалено на протязі 3-ох днів після його формування.
                Про його готовність вам повідомлять через повідомлення
              </Description>
              <SessionsCardTitle>Вартість: 1000 грн з двох.</SessionsCardTitle>
              <BthEnrolContainer>
                <Buutton text="Записатися" link to="/lipkasplit" />
              </BthEnrolContainer>
            </AboutSession>
          </SessionsCard>
          <SessionsCard>
            <SessionsCardTitle>Індивідуальне</SessionsCardTitle>
            <AboutSession>
              <Description>Заняття проходить наодинці з майстром.</Description>
              <Description>
                {" "}
                Тривалість заняття від 1.5 год до 2.5 годин.
              </Description>
              <Description>
                Можна вибрати з якої глини формуватиметься виріб: білої, чорної
                або кольорової.
              </Description>
              <Description>
                {" "}
                Можна створити та розмалювати 1-2 роботи (в залежності від
                складності) або розпочати великий проект.
              </Description>
              <Description>
                Виріб буде випалено на протязі 3-ох днів після його формування.
                Про його готовність вам повідомлять через повідомлення
              </Description>
              <SessionsCardTitle>Вартість: 1500 грн.</SessionsCardTitle>
              <BthEnrolContainer>
                <Buutton text="Записатися" link to="/lipkaindividual" />
              </BthEnrolContainer>
            </AboutSession>
          </SessionsCard>
        </InfoBlock>

        <BlockTitle>Майстер-класи</BlockTitle>
        <InfoBlock>
          <Info1>
            Ми проводи майстер-класи, як з ліпки та й з гончарства. Вони
            проходять як звичайні заняття проте вирізняються використанням
            особливих інструментів або технік ліпки, декорування які зазвичай не
            виносятся на звичайне заняття.
          </Info1>
          <Info2>
            Майстер-класи проводяться,зазвичай, раз у два тижні протягом всього
            робочого дня, тому ви без сумніву зможете його відвідати.
          </Info2>
          <Info2>Кількість слухачів від 3-ох до 7-ми чоловік.</Info2>
          <Info2>
            Детальніше про заплановані майстер-класи можна поглянути нижче.
            <BthEnrolContainer>
              <Button1 text="Різьблення" link to="/masterclass1" />
              <Button1 text="Ліпка ваз " link to="/masterclass2" />
            </BthEnrolContainer>
          </Info2>
        </InfoBlock>

        <BlockTitle>Сертифікати</BlockTitle>
        <InfoBlock>
          <Info1>
            Ми надаємо можливість придбати сертифікати як на звичайні заняття
            так і на наші майбутні майстер-класи.
          </Info1>
          <Info2>Детальніше про сертифікати можна прочитати нижче.</Info2>
          <BthEnrolContainer>
            <Button1 text="Гончарство" link to="/sertificategoncharstvo" />
            <Button1 text="Ліпка" link to="/sertificatelipka" />
          </BthEnrolContainer>
        </InfoBlock>
      </CardsBlock>

      <Routes>
        <Route path="/goncharstvogroup" element={<GoncharstvoGroup />} />
        <Route
          path="/goncharstvoindividual"
          element={<Goncharstvoindividual />}
        />
        <Route path="/goncharstvosplit" element={<GoncharstvoSplit />} />

        <Route path="/lipkagroup" element={<LipkaGroup />} />
        <Route path="/lipkaindividual" element={<LipkaIndividual />} />
        <Route path="/lipkasplit" element={<LipkaSplit />} />
        <Route path="/masterclass1" element={<Masterclass1 />} />
        <Route path="/masterclass2" element={<Masterclass2 />} />
        <Route
          path="/sertificategoncharstvo"
          element={<SertificateGoncharstvo />}
        />
        <Route path="/sertificatelipka" element={<SertificateLipka />} />
      </Routes>
    </>
  );
};

export default Cards;
