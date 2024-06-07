import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./FStyle.css";
import { postData } from "../../helpers/helpers";
import Footer from "../Footer";

const BackSec = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f3eeea;
  color: #002155;
  padding: 1rem;
  margin-bottom:1rem;
`;

const FormBlock = styled.div`
  width: 100%;
  background-color: #f3eeea;
  height:flex;
  padding:1rem;
`;
const Form = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3eeea;
  margin-left: 30px;
`;

const LabelForItem = styled.h2`
  font-size: 1.5em;
  font-family: "play", sans-serif;
  width: 100%;
  color: #002155;
  align-self: flex-start;
  max-width: 100%;
`;

const TitleForm = styled.h1`
  font-family: "play", sans-serif;
  font-size: 1.5rem;
`;

const Custombutton = styled.button`
color: #F3EEEA;
    background-color: #002155;
    border-color: #002155;
    padding: 20px 15px;
    border-radius: 10px;
    margin-top:20px;
`

const SertificateGoncharstvo = () => {
  const [formData, setFormData] = useState({
    visitorname: "",
    phonenumberv: "",
    emailvisitor: "",
    tgvisitor: "",
    activity: "gonchsrstvo", // Значення за замовчуванням "gonchsrstvo"
    formofactivity: "",
    howcontact: "",
    date: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "phonenumberv" && value.length > 10) {
      setPhoneError("Максимальна довжина номеру - 10 символів");
    } else {
      setPhoneError("");
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!validatePhoneNumber(formData.phonenumberv)) {
      alert("Будь ласка, введіть правильний номер телефону");
      return;
    }
    sendData();
  };

  const sendData = () => {
    postData("http://localhost:5000/sertificates", {
      Name: formData.visitorname,
      PhoneNumber: formData.phonenumberv,
      Email: formData.emailvisitor,
      Tg: formData.tgvisitor,
      Activity: formData.activity,
      formofactivity: formData.formofactivity,
      howtocontact: formData.howcontact,
      Date: formData.date,
    });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/; // Регулярний вираз для перевірки номера телефону (10 цифр)
    return phoneNumberRegex.test(phoneNumber);
  };

  return (
    <>
      <FormBlock>
        <BackSec>
          <Link to="/">Назад</Link>
        </BackSec>
        <Form onSubmit={onSubmitHandler}>
          <TitleForm>Форма для запису на заняття: Сертифікат</TitleForm>
          <TitleForm>Тип заняття: Гончарство</TitleForm>

          <div className="from-group">
            <LabelForItem>Ім'я</LabelForItem>
            <input
              className="from-control"
              name="visitorname"
              onChange={onChangeHandler}
            />
          </div>

          <div className="from-group">
            <LabelForItem>Номер телефону</LabelForItem>
            <input
              className="from-control"
              name="phonenumberv"
              onChange={onChangeHandler}
            />
            {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
          </div>

          <div className="from-group">
            <LabelForItem>Email</LabelForItem>
            <input
              className="from-control"
              name="emailvisitor"
              onChange={onChangeHandler}
            />
          </div>

          <div className="from-group">
            <LabelForItem>Нік в телеграмі(* якщо є)</LabelForItem>
            <input
              className="from-control"
              name="tgvisitor"
              onChange={onChangeHandler}
            />
          </div>

          <div className="from-group">
            <LabelForItem>Дата</LabelForItem>
            <input
              type="date"
              className="from-control"
              name="date"
              onChange={onChangeHandler}
            />
          </div>

          <div className="from-group">
            <LabelForItem>Вид діяльності</LabelForItem>
            <div>
              <div>
                <input
                  type="radio"
                  name="activity"
                  value="gonchsrstvo"
                  checked={true}
                  onChange={onChangeHandler}
                />
                <label htmlFor="gonchsrstvo">Гончарство</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="activity"
                  value="lipka"
                  disabled={true}
                  onChange={onChangeHandler}
                />
                <label htmlFor="lipka">Ліпка</label>
              </div>
            </div>
          </div>

          <LabelForItem>Тип заняття</LabelForItem>
  <div>
    <div>
      <input
        type="radio"
        name="formofactivity"
        value="group"
        onChange={onChangeHandler}
      />
      <label htmlFor="group">Групове</label>
    </div>
    <div>
      <input
        type="radio"
        name="formofactivity"
        value="split"
        onChange={onChangeHandler}
      />
      <label htmlFor="split">Парне</label>
    </div>
    <div>
      <input
        type="radio"
        name="formofactivity"
        value="individual"
        onChange={onChangeHandler}
      />
      <label htmlFor="individual">Індивідуальне</label>
    </div>
  </div>

          <div className="from-group">
            <LabelForItem>Як з вами зв'язатися?</LabelForItem>
            <div>
              <div>
                <input
                  type="radio"
                  name="howcontact"
                  value="call"
                  onChange={onChangeHandler}
                />
                <label htmlFor="call">Дзвінок</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="howcontact"
                  value="emailmassage"
                  onChange={onChangeHandler}
                />
                <label htmlFor="emailmassage">Лист на електронну почту</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="howcontact"
                  value="tgmassage"
                  onChange={onChangeHandler}
                />
                <label htmlFor="tgmassage">Повідомлення в телеграм</label>
              </div>
            </div>
          </div>
          <div className="form-group">
          <Custombutton  onClick={sendData}>Записатись</Custombutton>
          </div>
        </Form>
      </FormBlock>
      <Footer />
    </>
  );
};

export default SertificateGoncharstvo;

