import React from 'react'
import {BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../redux/proSlice';

const ProductCard = (props) => {
  console.log('data log',props)
  const dispatch = useDispatch();
  const {product} = props;
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().replace(/[^a-z0-9]/g, '');
  }
  
  const rootId = idString(_id);
  const  handleDetails = ()=>{
    navigate(`/product/${rootId}`,{
      state:{
        item:product
      }
    })
  }
  return (
    <div className='group relative'>
    <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden'>
    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt=''/>
    </div>
    <div className='w-full border-[1px] px-2 py-4'>
    <div className='flex justify-between items-center'>
    <div>
    <h2 className='text-base font-bold'>{product.title.substring(0,15)}</h2>
    </div>
    <div className='flex gap-2 justify-end relative overflow-hidden w-28 text-sm'>
    <div className='flex gap-2 transform group-hover:translate-x-28 transition-transform duration-500'>
    <p className='line-through text-gray'>{product.oldPrice}</p>
    <p className='font-semibold'>{product.price}</p>
    </div>
    <p onClick={()=>dispatch(addToCart({
      _id:product._id,
      title:product.title,
      image:product.image,
      price:product.price,
      quantity:1,
      description:product.description
    })) & toast.success(`${product.title} is added`)} className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-500 flex items-center gap-1 top-0 transform translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>add to cart <span><BsArrowRight/></span></p>
    </div>
    </div>
    <div style={{textAlign:'left'}}>
    <p>{product.category}</p>
    </div>
    <div>
    <p className='absolute top-4 right-0'>{
      product.isNew && (
        <p className='bg-black text-white font-semibold px-6 py-1'>Sale</p>
      )
    }</p>
    </div>
    </div>
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  )
}

export default ProductCard
