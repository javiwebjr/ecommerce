import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

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
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("nuevos");

    const location = useLocation();
    const category = location.pathname.split('/')[2];

    const handleFilters = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Por:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>orange</Option>
                        <Option>beige</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>Talla</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Ordenar Por:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="nuevos">Recien Agregados</Option>
                        <Option value="desc">Mas Caro</Option>
                        <Option value="asc">Mas Barato</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList