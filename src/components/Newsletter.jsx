import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className='text-white text-center w-full py-16 px-6'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>SUBSCRIBE TO OUR NEWSLETTER!</h1>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <input type="email" className='rounded-md mx-6 w-[400px]' placeholder='Enter Email' />
      <button className='bg-[#c365a2] rounded-md font-medium w-[150px] ml-4 my-6'>subscribe</button>
    </div>
    </>
  )
}

export default Newsletter
