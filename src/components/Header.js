import React from 'react'
import logoDark from '../assets/logo.png';
import cartImg from '../assets/cart.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const productCart =  useSelector((state)=>state.ecom.productData);
  const userInfo = useSelector(state=>state.ecom.userInfo);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
      <div>
      <img className='w-28' src={logoDark} alt='logoDark'/>
      </div>
      <div className='flex items-center gap-8'>
      <ul className='flex items-center gap-8'>
      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
      </ul>
      <Link to='/cart'>
      <div className='relative'>
      <img className='w-6' src={cartImg} alt='cartImg'/>
      <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productCart.length}</span>
      </div>
      </Link>
      <Link to="/login">
      <img className='w-8 h-8 rounded-full' src={
        userInfo?userInfo.image : 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }/>
      </Link>
      {userInfo && <p>{userInfo.name}</p>}
      </div>
      </div>
    </div>
  )
}

export default Header;
