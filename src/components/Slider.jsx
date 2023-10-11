import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
    position: relative;
    overflow: hidden;
`;


const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;

    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};

    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center; 
    background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image= styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 4rem;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = direction => {

    }
    return (
        <Container>
            <Arrow direction="left" onClick={ ()=>handleClick("left") }>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Temporada Navideña Que Mejor Regalo!</Title>
                        <Description>No te pierdas nuestras ofertas de inauguración.</Description>
                        <Button>Ver Ahora</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Concientete A Ti Mismo!</Title>
                        <Description>No te pierdas nuestras ofertas de inauguración.</Description>
                        <Button>Ver Ahora</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fdf0f4">
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Viste A Tu Familia!</Title>
                        <Description>No te pierdas nuestras ofertas de inauguración.</Description>
                        <Button>Ver Ahora</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={ ()=>handleClick("right") }>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider