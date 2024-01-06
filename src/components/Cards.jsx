import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[9rem] px-4 text-white'>
      <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-6'>
        <div className='w-full border rounded-md hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-6'>100+</h2>
        <p className='text-center'>Projects completed</p>
        <p className='text-center'>Satisfied clients</p>

        </div>
      </div>
    </div>
  )
}

export default Cards
