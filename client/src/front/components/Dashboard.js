import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Title = styled.h1`
  font-family: "play", sans-serif;
  font-size: 1.5rem;
  padding-top: 3rem;
`;

const Description = styled.p`
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Block = styled.div`
  background-color: #f3eeea;
  padding: 1rem;

  .table-container {
    overflow-x: auto;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;
    border: 1px solid #ccc;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Dashboard = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/dashboard")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  console.log(data);
  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const formatPhoneNumber = (phoneNumber) => {
    return `0${phoneNumber}`;
  };

  return (
    <>
      <Navbar />
      <Block>
        <div className="container mt-5">
          <Title>Welcome Back: {name}</Title>
          <div className="table-container">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Description>
            <Title>Головна форма запису </Title>
            <div className="table-container">
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>І'мя</th>
                    <th>Номер телефону</th>
                    <th>Телеграм</th>
                    <th>Вид діяльності</th>
                    <th>Тип заняття</th>
                    <th>Як зв'язатися</th>
                  </tr>
                </thead>
                {data.mainRole?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.Date.split("T")[0]}</td>
                    <td>{el.Name}</td>
                    <td>{formatPhoneNumber(el.PhoneNumber)}</td>
                    <td>{el.Tg}</td>
                    <td>{el.Activity}</td>
                    <td>{el.formofactivity}</td>
                    <td>{el.howtocontact}</td>
                  </tr>
                ))}
              </table>
            </div>
          </Description>

          <Description>
            <Title>Гончарство</Title>
            <div className="table-container">
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>І'мя</th>
                    <th>Номер телефону</th>
                    <th>Телеграм</th>
                    <th>Тип заняття</th>
                    <th>Як зв'язатися</th>
                  </tr>
                </thead>
                <tbody>
                  {data.goncharstvo?.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.Date.split("T")[0]}</td>
                      <td>{el.Name}</td>
                      <td>{formatPhoneNumber(el.PhoneNumber)}</td>
                      <td>{el.Tg}</td>
                      <td>{el.formofactivity}</td>
                      <td>{el.howtocontact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Description>

          <Description>
            <Title>Ліпка</Title>
            <div className="table-container">
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>І'мя</th>
                    <th>Номер телефону</th>
                    <th>Телеграм</th>
                    <th>Тип заняття</th>
                    <th>Як зв'язатися</th>
                  </tr>
                </thead>
                <tbody>
                  {data.lipka?.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.Date.split("T")[0]}</td>
                      <td>{el.Name}</td>
                      <td>{formatPhoneNumber(el.PhoneNumber)}</td>
                      <td>{el.Tg}</td>
                      <td>{el.formofactivity}</td>
                      <td>{el.howtocontact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Description>

          <Description>
            <Title>Майстеркласи</Title>
            <div className="table-container">
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>І'мя</th>
                    <th>Номер телефону</th>
                    <th>Телеграм</th>
                    <th>Як зв'язатися</th>
                  </tr>
                </thead>
                <tbody>
                  {data.masterclassestable?.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.Name}</td>
                      <td>{formatPhoneNumber(el.PhoneNumber)}</td>
                      <td>{el.Tg}</td>
                      <td>{el.howtocontact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Description>

          <Description>
            <Title>Сертифікати</Title>
            <div className="table-container">
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>І'мя</th>
                    <th>Номер телефону</th>
                    <th>Телеграм</th>
                    <th>Тип заняття</th>
                    <th>Як зв'язатися</th>
                  </tr>
                </thead>
                <tbody>
                  {data.sertificates?.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.Date.split("T")[0]}</td>
                      <td>{el.Name}</td>
                      <td>{formatPhoneNumber(el.PhoneNumber)}</td>
                      <td>{el.Tg}</td>
                      <td>{el.formofactivity}</td>
                      <td>{el.howtocontact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Description>
        </div>
      </Block>
    </>
  );
};

export default Dashboard;
