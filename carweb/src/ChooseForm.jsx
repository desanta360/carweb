import React from 'react'

const ChooseForm = ({Tittle ,Text}) => {
  return (
    <div  className='items-center w-[180]'>
    
    <div className="text-center">
      {/* Content within the container */}
      <h1  className=' text-black-500 font-bold'>{Tittle}</h1>
      <div className='p-[5] h-[56px] w-[180] text-[#BBC8D4] border-[#BBC8D4] border-2 rounded-md mx-auto flex justify-center items-center'>
        {/* Container for select */}
        <select className="">
          {/* Centering the option */}
          <option className="text-center">{Text}</option>
        </select>
      </div>
    </div>
  </div>
  
  )
}

export default ChooseForm
