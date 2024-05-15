import React from 'react'
import Button from './Button'
const Navigation = () => {
  return (
    <div className='h-[60px] bg-[#f9f9f9] flex flex-row justify-between items-center pl-[40px] pr-[40px]'>
        <div>
            <h3 className='text-[16px] font-bold'>CarVenture</h3>
        </div>
        <div className='flex flex-row items-center space-x-[30px]'>
            <div>
                <p className='text-[16px] font-md cursor-pointer hover:text-[#0000ff]'>Home</p>
            </div>
            <div>
                <p className='text-[16px] font-md cursor-pointer hover:text-[#0000ff]'>Cars</p>
            </div>
            <div>
                <p className='text-[16px] font-md cursor-pointer hover:text-[#0000ff]'>Offers</p>
            </div>
            <div>
                <p className='text-[16px] font-md cursor-pointer hover:text-[#0000ff]'>Location</p>
            </div>
            <div>
                <p className='text-[16px] font-md cursor-pointer hover:text-[#0000ff]'>Contact</p>
            </div>
            <div>
                <Button Text="Sign Up" />
            </div>
        </div>
    </div>
  )
}

export default Navigation
