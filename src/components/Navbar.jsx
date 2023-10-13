import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`;
//Navbar superior left side
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 1.4rem;
    cursor: pointer;
    ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
    border: 0.5 solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "10px"})}
`;

const Input = styled.input`
    border: none;
    font-size: 1rem;
    ${mobile({width: "50px"})}
`;

//Navbar superior center
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "12px"})}
`;

//Navbar superior right side
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "start", marginLeft: "10px"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "5px"})}
`;

const Navbar = () => {
    return (
    <Container>
        <Wrapper>
        <Left>
            <Language>ES</Language>
            <SearchContainer>
            <Input placeholder='buscar' />
            <Search style={{color: "gray", fontSize: "16px"}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo>ENCARGOS sv</Logo>
        </Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
                </Badge>
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
    )
}

export default Navbar
