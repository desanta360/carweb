import React from 'react'
import Whycard from './Whycard'

const Why = () => {
  return (
    <div className='relative top-[400px] text-center ' >
        <h1 className='text-center  text-3xl font-bold'>
            Why We Are Different
        </h1>
      <div className='text-center'>
      <p className='w-[500px] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo quibusdam earum voluptatum ratione. Lorem. Lorem ipsum dolor sit amet consecte
            tur adipisicing elit. Quas totam inventore hic.
        </p>
        
      </div>
            <div className='flex flex-row'>
                <>
                <Whycard />
                <Whycard /> 
                <Whycard />
                </>
            </div>
     
    </div>
  )
}

export default Why
