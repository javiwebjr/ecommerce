import React, { useEffect, useState } from 'react'
import {Add, Remove} from '@mui/icons-material'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from '../config/axiosClient';
import { useNavigate } from "react-router-dom";

const KEY = import.meta.env.VITE_STRIPE_KEY;

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
    font-size: 1rem;
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
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken =(token) => {
        setStripeToken(token);
    }
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500
                });
                history("/success", {
                    stripeData: res.data,
                    products: cart
                });
            } catch (error) {
                console.log(error);
            }
        }
        if(stripeToken) {
            makeRequest();
        }
    }, [stripeToken, cart.total, history])
    return (
        <Container>
            <Announcement/>
            <Navbar/>
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
                    {cart.products?.map(product =>(
                        <Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Producto: </b>{product.title}</ProductName>
                                    <ProductId><b>ID: </b>{product._id}</ProductId>
                                    <ProductColor color={product.color}> Color: {product.color}</ProductColor> 
                                    <ProductSize><b>Size: {product.size}</b></ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $ {product.price * product.quantity}
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                    )) }
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>Resumen De Compra</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout name='Test Shop' image='https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2072'
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <button style={{
                            border: "none",
                            width: "120px",
                            borderRadius: "5px",
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            cursor: "pointer"
                        }}>
                        PAGAR
                        </button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
