import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';

const ProductsPage = () => {

const [productData, setProductData] = useState([])    


const Data = async () =>  {
    axios.get("http://localhost:8080/data")
    .then((response) => {
    //   console.log(response.data);
      setProductData(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }


  useEffect(() =>  {
    Data();
}, [])


    
  return (
    <>
     {
        productData.map((item, index) => {
          return (
            <ProductCard key={index} {...item} />
          )
        })
     }
    </>
  )

}
export default ProductsPage