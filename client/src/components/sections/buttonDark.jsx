import React from 'react'
import styled from 'styled-components'

const Enrole = styled.button`
height:65px;
width:200px;
border-radius: 50%;
background-color:#002155;
color:#f3eeea;
outline: none;
border: none;
cursor: pointer;
font-size: 1.3rem;
margin-top:50px;

`
const buttonDark = () => {
  return (
    <Enrole>Записатися</Enrole>
  )
}

export default buttonDark