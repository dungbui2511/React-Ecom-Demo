import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
const Cart = () => {
  const productData = useSelector((state)=>state.ecom.productData);
  const userInfo = useSelector((state)=>state.ecom.userInfo);
  let [toltalAmt,setTotalAmt] = useState("");
  const [payNow,setPayNow] = useState(false);
    useEffect(()=>{
      let price = 0;
      productData.map((item)=>{
        price+= item.price * item.quantity;
        return price;
      })
      setTotalAmt(price.toFixed(2));
    },[productData])
    const handleCheckOut = ()=>{
      if(userInfo)
      {
        setPayNow(true);
      }
      else
      {
        toast.error('Please sign in to check out');
      }
    }
  console.log(productData);
  return (
   <div>
   <div className='max-w-screen-xl mx-auto py-20 flex'>
   <CartItem/>
   <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
   <div className='flex flex-col gap-6 border-b-gray-400 pb-6'>
   <h2 className='text-2xl font-medium'>cart totals</h2>
   <p className='flex items-center gap-4 text-base'>
   Subtotal{" "}
   <span className='font-bold text-lg'>${toltalAmt}</span>
   </p>
   <p className='flex items-center gap-4 text-base'>
   Shipping{" "}
   <span>
   abc
   </span>
   </p>
   <p className='font-semibold flex justify-between mt-6'>
  {" "}
   Total <span className='text-xl font-bold'>${toltalAmt}</span>
   </p>
   <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>proceed to checkout</button>
   {
    payNow && (<div>
    <StripeCheckout
    stripeKey="pk_test_51P8YJjRuo4g580DIZJwkjwU8wP36wImyTabiaDVL4NFOcW7fFGFzAFwj1KG9yMXke6P1XfeCRXUqkvhdJ8jRocWS00Xnm9pGTC"
    name='TienDungz Online Shopping'
    amount={toltalAmt *100}
    label='Pay to Dungz'
    description={`Your Payment amount is $${toltalAmt}`}
    email={userInfo.email}
    />
    </div>
    )
   }
   </div>
   </div>
 </div>
   </div>
  )
}

export default Cart