import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postData } from "../../helpers/helpers";
import Footer from "../Footer";

const BackSec = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f3eeea;
  color: #002155;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const FormBlock = styled.div`
  width: 100%;
  background-color: #f3eeea;
  height: flex;
  padding: 1rem;
`;

const Form = styled.form`
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
  color: #f3eeea;
  background-color: #002155;
  border-color: #002155;
  padding: 20px 15px;
  border-radius: 10px;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;

const GoncharstvoSplit = () => {
  const [formData, setFormData] = useState({
    visitorname: "",
    phonenumberv: "",
    emailvisitor: "",
    tgvisitor: "",
    activity: "gonchsrstvo", // Default value
    formofactivity: "split", // Default value
    howcontact: "",
    date: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "phonenumberv" && value.length > 10) {
      setPhoneError("Максимальна довжина номеру - 10 символів");
    } else {
      setPhoneError("");
    }

    if (name === "emailvisitor" && value.length > 100) {
      setEmailError("Максимальна довжина адреси - 100 символів");
    } else {
      setEmailError("");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  const sendData = () => {
    postData("http://localhost:5000/goncharstvo", {
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

  return (
    <>
      <FormBlock>
        <BackSec>
          <Link to="/">Назад</Link>
        </BackSec>
        <Form onSubmit={onSubmitHandler}>
          <TitleForm>Форма для запису на заняття: Гончарство</TitleForm>
          <TitleForm>Тип заняття: Парне</TitleForm>

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
            {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
          </div>

          <div className="from-group">
            <LabelForItem>Email</LabelForItem>
            <input
              className="from-control"
              name="emailvisitor"
              onChange={onChangeHandler}
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
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
                  onChange={onChangeHandler}
                  checked
                  readOnly
                />
                <label htmlFor="gonchsrstvo">Гончарство</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="activity"
                  value="lipka"
                  onChange={onChangeHandler}
                  disabled
                />
                <label htmlFor="lipka">Ліпка</label>
              </div>
            </div>
          </div>

          <div className="from-group">
            <LabelForItem>Тип заняття</LabelForItem>
            <div>
              <div>
                <input
                  type="radio"
                  name="formofactivity"
                  value="group"
                  onChange={onChangeHandler}
                  disabled
                />
                <label htmlFor="group">Групове</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="formofactivity"
                  value="split"
                  onChange={onChangeHandler}
                  checked
                  readOnly
                />
                <label htmlFor="split">Парне</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="formofactivity"
                  value="individual"
                  onChange={onChangeHandler}
                  disabled
                />
                <label htmlFor="individual">Індивідуальне</label>
              </div>
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
                <label htmlFor="emailmassage">Лист на електронну пошту</label>
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
            <Custombutton onClick={sendData}>Записатися</Custombutton>
          </div>
        </Form>
      </FormBlock>
      <Footer />
    </>
  );
};

export default GoncharstvoSplit;
