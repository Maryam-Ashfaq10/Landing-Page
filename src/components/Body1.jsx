import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const PageBody = () => {
  const [typeEffect] = useTypewriter({
    words : ['SCALABLE','STRONG','PROMISING'],
    loop : {},
    typeSpeed : 100,
    deleteSpeed : 50
  })

  return (

    <div className='text-[#93a6ed]'>
      <div className='max-w-[700px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
        <p className='font-bold p-2'>THE PERFECT DESTINATION FOR YOUR IT SOLUTIONS. </p>
        <h2 className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>MAKE YOUR BUSINESS  <span>{typeEffect}</span></h2>
        <button className='bg-[#c365a2] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>START NOW</button>

      </div>
    </div>
  )
}

export default PageBody
