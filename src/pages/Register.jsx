import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.1)),
      url("https://images.unsplash.com/photo-1590666027616-38e0283eb6c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") center;
      display: flex;
      background-size: cover;
      align-items: center;
      justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3));
`;
const Title = styled.h1`
    font-size: 2.8rem;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 1rem;
`;
const Agreement = styled.span`
    font-size: 0.7rem;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-size: 1rem;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crea Tu Cuenta</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirma Tu Contraseña" />
          <Agreement>
            Doy mi consentimiento para el procesamiento de mis datos personales de acuerdo con <b>política de privacidad.</b> 
          </Agreement>
          <Button>Crear Cuenta</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
