import React, {useState} from 'react'
import styled from 'styled-components'
import {Minus} from '../Icons/Minus'
import {Plus} from '../Icons/Plus'

const Container = styled.div`
curson:pointer;
padding:1rem 0.5rem;
display:flex;
flex-direction:column;
border-bottom:1px solid #002155;
margin:3rem 0;
`
const Title = styled.div`
font-size:1.3rem;
display:flex;
justify-content:space-between;
align-items:center;
`
const Reveal = styled.div`
display:${props => props.clicked ? 'block' : 'none'};
margin-top:1.5rem;
margin-bottom:1.5rem;
color:${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-size:1rem;
font-weight:300;
line-height:1.1rem;
`
const Name =styled.div`
display:flex;
align-items:center;
`
const Indicator =styled.span`
display:flex;
justify-content:center;
align-items:center;
svg{
    width:1rem;
    height:auto;
    fill:#24292F;
}
`
const AcordeonFAQ = ({title,children}) => {
    const [collapse, setCollapse] = useState(false)
  return (
    <Container>
        <Title onClick ={() => setCollapse(!collapse)}>
            <Name>
                <span>{title}</span>
            </Name>
            {
                collapse ?
                <Indicator><Minus /></Indicator> : <Indicator><Plus /></Indicator>
            }
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default AcordeonFAQ