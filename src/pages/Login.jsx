import React, { useState } from 'react'
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.1)),
      url("https://images.unsplash.com/photo-1520483984082-37caa3093d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") center;
      display: flex;
      background-size: cover;
      align-items: center;
      justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
`;
const Title = styled.h1`
    font-size: 2.8rem;
    font-weight: 300;
    color: white;
    text-align: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1rem;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 10px;

    &:disable{
      color: green;
      cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    text-decoration: underline;
    &:hover{
        color: teal;
    }
`;
const Error = styled.span`
  color: red;
  font-size: 1rem;
`;


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=> state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
  };
  return (
    <Container>
      <Wrapper>
        <Title>Inicia Sesión</Title>
        <Form>
          <Input placeholder="Nombre" onChange={(e)=> setUsername(e.target.value)} />
          <Input placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} type='password' autoComplete='off'/>
          <Button onClick={handleClick} disabled={isFetching} >Iniciar Sesión</Button>
          { error && <Error>Datos incorrectos intentalo de nuevo..</Error>}
          <Link>¿Olvidaste Tu Contraseña?</Link>
          <Link>Crea Una Cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
