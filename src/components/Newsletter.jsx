import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    ${mobile({width: "80%"})}
`;
const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 8;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Suscribete!</Title>
        <Description>Recibe noticias de nuestros productos para que no te pierdas de las ofertas.</Description>
        <InputContainer>
            <Input placeholder='Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter