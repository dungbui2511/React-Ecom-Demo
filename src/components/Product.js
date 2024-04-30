import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { addToCart } from '../redux/proSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = () => {
  const [details,setDetails] = useState({});
  let [baseQty,setBaseQty] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(()=>{
    setDetails(location.state.item);
  },[]);
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
      <div className='w-2/5 relative'>
      <img className='w-full h-[550px] object-cover' src={details.image} alt='productImg'/>
      </div>
      <div className='absolute top-4 right-0'>
      {details.isNew &&(
        <p className='bg-black tex-white font-semibold px-8 py-1'>
        Sale
        </p>
      )}
      </div>
      <div className='w-3/5 flex flex-col gap-4'>
      <h2 className='text-4xl font-semibold mt-10' style={{textAlign:'left'}}>{details.title}</h2>
      <div className='flex items-center gap-4 mb-11'>
      <p className='text-2xl font-medium text-gray-900'>
      ${details.price}
      </p>
      <p className='line-through font-base text-gray-500'>
      ${details.oldPrice}
      </p>
      </div>
      <div className='flex items-center gap-2 text-base'>
        <div className='flex'>
        <MdOutlineStar/>
        <MdOutlineStar/>
        <MdOutlineStar/>
        <MdOutlineStar/>
        <MdOutlineStar/>
        </div>
        <p className='text-xs text-gray-500'>(1 Customer review)</p>
      </div>
      <p className='text-base text-gray-500 mt-3' style={{textAlign:'left'}}>{details.description}</p>
      <div className='flex gap-4'>
      <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
      <p className='text-sm'>Quantity</p>
      <div className='flex items-center gap-4 text-sm font-semibold'>
      <button onClick={()=>setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty -1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
      <span>{baseQty}</span>
      <button onClick={()=>setBaseQty(baseQty +1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
      </div>
      </div>
      <button onClick={()=> 
      dispatch(
        addToCart({
          _id:details._id,
          title:details.title,
          image:details.image,
          price:details.price,
          quantity:baseQty,
          description:details.description
        } & toast.success(`${details.title} is added`))
      )
      } className='bg-black text-white px-6 py-3 active:bg-gray-800'>add to cart</button>
      </div>
      <p className='text-base text-gray' style={{textAlign:'left'}}>Category: <span className='font-medium capitalize'>{details.category}</span></p>
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

export default Product
