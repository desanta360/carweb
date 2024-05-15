import React from 'react'

const Button = ({Text}) => {
  return (
    <div>
      <button className='bg-[#1f4590] text-[16px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] border-0 text-white  rounded-[5px] hover:opacity-[90%]'>{Text}</button>
    </div>
  )
}

export default Button
