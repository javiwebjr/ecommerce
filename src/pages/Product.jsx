import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { clienteAxiosPublic } from '../config/axiosClient';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 2rem;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    font-size: 1rem;
`;
const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    font-size: 1rem;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    &:hover{
        background-color: wheat;
    }
`;

const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const location = useLocation();
    const id = location.pathname.split('/')[2];


    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await clienteAxiosPublic.get("/productos/buscar/"+id)
                setProduct(res.data);
            } catch (error) {
                
            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({...product, quantity, color, size})
        );
    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
            <ImageContainer>
                <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colores</FilterTitle>
                        {product.color?.map(c=>(
                            <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {product.size?.map(s=>(
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=> handleQuantity("dec")} style={{cursor: "pointer"}} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=> handleQuantity("inc")} style={{cursor: "pointer"}}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Agregar Al Carrito</Button>
                </AddContainer>
            </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
