import React from 'react'
import Button from './Components/Button'

const Whycard = () => (
    <div>

        <div className='flex flex-row '>
            <div className='  w-[350pxpx] h-[460px] border border-2 m-[50px] shadow-slate-500/50 shadow-lg'>
                <h1 className='flex justify-center items-center p-[10px] pb-[12px] '>
                    <img src="./public/Shield.png" alt="" />
                </h1>

                <h1 className='text-center text-4xl text-black mb-20px font-bold pb-[15px]'>Easy Booking</h1>
                <p className='text-left'>
                    <p className='pb-[10px] pl-[20px] pr-[20px] text-center flex w-[330px] '> 
                        Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus dolorum
                        libero deserunt aut asperiores odit quae, impedit veritatis autem. Consequuntur rem,
                    </p>
                </p>
            </div>
        </div>
    </div>
)

export default Whycard
