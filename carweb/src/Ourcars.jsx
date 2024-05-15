import React from 'react'
import Button from './Components/Button'
import Carcard from './Carcard'

const Ourcars = () => (
    <div className='relative top-[400px]  '>
        <h1 className='text-center text-4xl text-black pl-400px mb-20px font-bold'>Our Featured Cars</h1>
       <div className='flex flex-row'>
       <>
        <Carcard />
        <Carcard  />
        <Carcard  />
       </>
       </div>
       
      
    </div>
)

export default Ourcars
