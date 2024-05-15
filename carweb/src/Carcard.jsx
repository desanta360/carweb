import React from 'react'
import Button from './Components/Button'

const Carcard = () => {
  return (
    <div>
       <div className='flex flex-row '>
            <div className='  w-[350pxpx] h-[450px] border border-2 m-[50px] shadow-slate-500/50 shadow-lg'>
                <h1 className='flex justify-center items-center p-[10px] pb-[12px] '>
                    <img src="./public/car1.png"  alt="" />
                </h1>

                <h1 className='text-center text-3xl font-bold pb-[15px]'>Toyota Corolla T-20</h1>
                <p className='text-left'>
                     <p className='pb-[10px] pl-[35px] flex'> <img src="./public/check.png" alt="" /> Lorem ipsum dolor sit.</p>
                     <p className='pb-[10px] pl-[35px] flex'> <img src="./public/check.png" alt="" /> Lorem ipsum dolor sit.</p>
                     <p className='pb-[10px] pl-[35px] flex'> <img src="./public/check.png" alt="" /> Lorem ipsum dolor sit.</p>
                    
                    <div className='p-[10px]  pl-[50px]'>
                        <Button Text="rent now" />
                    </div>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Carcard
