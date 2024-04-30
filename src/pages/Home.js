import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const [products,setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(()=>{
    setProducts(data.data);
  },[data])
  console.log(data);
  return (
    <div>
      <Banner/>
      <Products products={products}/>
      <Footer/>
    </div>
  )
}
