import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { productsPopulars } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(()=> {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category 
            ? `http://localhost:4000/api/productos?category=${category}` 
            : "http://localhost:4000/api/productos"
          );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category && setFilterProducts(
      products.filter(item => Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  }, [products, category, filters]);

  useEffect(() => {
    if(sort==="nuevos"){
      setFilterProducts(previous => [...previous].sort((New, Old)=> New.createdAt - Old.createdAt))
    }else if((sort === "asc")){
      setFilterProducts(previous => [...previous].sort((asc, desc)=> asc.price - desc.price))
    }else{
      setFilterProducts(previous => [...previous].sort((asc, desc)=> desc.price - asc.price))
    }
  }, [sort])

  return (
    <Container>

        {category 
          ? filterProducts.map((item) => <Product item={item} key={item.id} />)
          : products.slice(0,8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products