import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h2`
    font-size: 2rem;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    height: 50px;
    object-fit: contain;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ENCARGOS sv</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla commodi incidunt atque placeat ipsam molestias aut quis officia! Odit, nulla exercitationem. Iure quis aliquam quia et sequi recusandae porro omnis!
            </Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Inicio</ListItem>
                <ListItem>Carrito</ListItem>
                <ListItem>Moda Hombre</ListItem>
                <ListItem>Moda Mujer</ListItem>
                <ListItem>Accesorios</ListItem>
                <ListItem>Mi Cuenta</ListItem>
                <ListItem>Lis de Deseo</ListItem>
                <ListItem>Terminos</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}} /> El Salvador, San Salvador
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/> +503 1111111
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/> encargos-sv@email.com
            </ContactItem>

            <Payment src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png' />
        </Right>
        
    </Container>
  )
}

export default Footer