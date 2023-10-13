import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`
    
`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 1.8rem;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    font-size: 1rem;
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option`
    font-size: 1rem;
`;

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar Por:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Orange</Option>
                    <Option>Yellow</Option>
                    <Option>Blue</Option>
                </Select>
                <Select>
                    <Option disabled selected>Talla</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Ordenar Por:</FilterText>
                <Select>
                    <Option disabled selected>Recien Agregados</Option>
                    <Option>Mas Barato</Option>
                    <Option>Mas Caro</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList