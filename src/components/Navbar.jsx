import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

const SearchContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

//Navbar superior center
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`

//Navbar superior right side
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
    <Container>
        <Wrapper>
        <Left>
            <Language>English</Language>
            <SearchContainer>
            <Input/>
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
