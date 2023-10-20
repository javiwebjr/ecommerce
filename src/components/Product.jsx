import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 400px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    flex-direction: column;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({minWidth: "200px"})}
`;


const Image = styled.img`
    height: 75%;
    z-index: 2;
    ${mobile({width: "250px", objectFit: "cover"})}
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

    &:hover{
        background-color: wheat;
        transform: scale(1.1);
    }
`;
const TitleInfo = styled.h3`
    padding: 20px;
    font-size: 1rem;
    font-weight: 400;
`


const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link  to={`/producto/${item._id}`} style={{color:"inherit"}}>
                    <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
            
        </Info>
        <TitleInfo>{item.title}</TitleInfo>
    </Container>
    
  )
}

export default Product