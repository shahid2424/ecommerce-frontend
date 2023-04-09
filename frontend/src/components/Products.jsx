import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../pages/data';
import Product from './Product';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat,filters,sort}) => {
  const [products, setProducts]= useState([]);
  const [filteredProducts, setFilterdProducts]= useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get( cat 
          ? `http://localhost:5000/api/products? category = coat"${cat}`
           : "http://localhost:5000/api/products"
          );
        setProducts(res.data);
      }catch(err){
      }
    };
    getProducts()
  },[cat])
  

  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  );
};

export default Products;