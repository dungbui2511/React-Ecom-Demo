import React from 'react'
import ProductCard from './ProductCard'

const Products = (props) => {
  const {products} = props;
  console.log('data products',props);
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
      <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
      <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quos fugit inventore, cumque quae corporis ratione tenetur eos voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis asperiores repudiandae assumenda quidem.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
      {
        // eslint-disable-next-line array-callback-return
        products.map((item)=>{
          return <ProductCard key={item._id} product={item}/>
        })
      }
      </div>
    </div>
  )
}

export default Products 
