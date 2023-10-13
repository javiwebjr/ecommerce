import React from 'react'
import {Add, Remove} from '@mui/icons-material'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === 'filled' && 'none'};
    background-color: ${props=>props.type === 'filled' ? 'black': 'transparent'};
    color: ${props=>props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
    
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;

`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props=> props.color};
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 1.4rem;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 1.6rem;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h3`
    font-weight: 200;
    font-size: 1.6rem;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "1.4rem"};
`;
const SummaryItemText = styled.span`
    
`;
const SummaryItemPrice = styled.span`
    
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>Tu Carrito</Title>
        <Top>
            <TopButton>Seguir Comprando</TopButton>
            <TopTexts>
                <TopText>Carrito (2)</TopText>
                <TopText>Lista de Deseo (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>Pagar Ahora</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://static.zara.net/photos///2023/I/0/1/p/9878/164/982/2/w/850/9878164982_1_1_1.jpg?ts=1690454106204" />
                        <Details>
                            <ProductName><b>Producto: </b>Dress Satin</ProductName>
                            <ProductId><b>ID: </b>2132123</ProductId>
                            <ProductColor color='1fc7c7' />
                            <ProductSize><b>Size: </b>M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>
                            $67
                        </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://static.zara.net/photos///2023/I/0/1/p/5039/434/720/2/w/850/5039434720_1_1_1.jpg?ts=1696320544912" />
                        <Details>
                            <ProductName><b>Producto: </b>Dress Suave Algodon</ProductName>
                            <ProductId><b>ID: </b>3213422</ProductId>
                            <ProductColor color='D3D3D3' />
                            <ProductSize><b>Size: </b>S</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>
                            $38
                        </ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Resumen De Compra</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$105</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Envio Estimado</SummaryItemText>
                    <SummaryItemPrice>$5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Descuento Envio</SummaryItemText>
                    <SummaryItemPrice>$ -5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem  type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$105</SummaryItemPrice>
                </SummaryItem>
                <Button>
                    Pagar
                </Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
