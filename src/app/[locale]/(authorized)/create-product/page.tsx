
import { CreateProductForm } from '@/src/components/products/create-product-form'
import React from 'react'

function page() {
  return (
    <div className='flex-grow container flex justify-center items-center m-auto px-4 py-8 2xl:px-20'>
      <CreateProductForm />
    </div>
  ) 
}

export default page