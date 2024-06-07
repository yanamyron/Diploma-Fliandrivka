import React from 'react';
import styled from 'styled-components';
import AcordeonFAQ from '../AcordeonFAQ';


const SectionFAQ = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #f3eeea;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 2rem 0; /* Змінив відступи для адаптивності */
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  color: #002155;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #002155;
  width: fit-content;
  font-family: 'play', sans-serif;
`;

const Container = styled.div`
  width: 90%; /* Збільшив ширину контейнера для адаптивності */
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap; /* Змінив на wrap для адаптивності */
  justify-content: space-around; /* Змінив на around для кращого розташування на маленьких екранах */
`;

const BoxQ = styled.div`
  width: 45%;
  margin-bottom: 1.5rem; /* Змінив маржини для кращого розташування на маленьких екранах */
`;


const FAQ = () => {
  return (
    <SectionFAQ id="faq" >
      <Title>FAQ</Title>  
      <Container>
      <BoxQ>
        <AcordeonFAQ title="Яка тривалість заняття?">
        Заняття триває від 1.5 до 3 годин взаліжності 
        від того яке заняття ви виберете
            </AcordeonFAQ>
            <AcordeonFAQ title="Зі скількох років?">
        Ми раді вітати людей всіх вікових категорій,
        проте дітлахи з 9 по 13 років повинні бути у 
        супроводі когось з дорослих.
            </AcordeonFAQ>
            <AcordeonFAQ title="А ви пет-френдлі?">
        Так, й ми будемо раді вітати вас обох у нашій 
        студії.
            </AcordeonFAQ>
            <AcordeonFAQ title="Маєте сертифікати?">
        Так, у нас можна замовити сетрифікати на наші 
        майбутні майстер-класи або на бідь яке наше заняття.
            </AcordeonFAQ>
            </BoxQ>

       <BoxQ>
        <AcordeonFAQ title="Які форми занять у вас є?">
        У нас є групові, парні та індивідуальні заняття.
        Вам буде з чого обрати.
            </AcordeonFAQ>
            <AcordeonFAQ title="Яким чином виплавляють готовий посуд?">
        Виплавка виробів здійснюється на протязі трьох 
        робочих днів після його формування в глиняній печі.
            </AcordeonFAQ>
            <AcordeonFAQ title="Бувають казуси під час випиплавки?">
        Так, інколи трапляється таке ,що виріб тріскає через 
        високу температуру печі.У такому випадку ми пропонуємо 
        безкоштовне заняття для того аби переробити виріб.
            </AcordeonFAQ>
            <AcordeonFAQ title="Скільки часу дійсний сертифікат?">
        Сертифікат дійсний три місяці з моменту покупки який 
        буде вказано на сертифікаті.
            </AcordeonFAQ></BoxQ>  
      </Container>  
    </SectionFAQ>
  );
};

export default FAQ;
