import React from 'react'
import ChooseContainer from '../ChooseContainer'

const Banner = () => {
  return (
    <div className='w-full h-[800px] p-[30px] relative'>
      <img src="./public/banner.jpg" className='w-full h-full rounded-[6px] z-[-90px]' alt=""/>
      <div className='absolute top-[100px] left-[120px]'>
        <p className='w-[480px] text-[50px] font-bold text-white '>
            Renting cars have never been this easy
        </p>
        <p className='w-[600px] text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto pariatur nihil placeat,
            ab tempore sit facilis corporis cupiditate odio? 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto pariatur nihil placeat,
            ab tempore sit facilis corporis cupiditate odio?
        </p>
      </div>
      <div className='relative bottom-[-45px] z-[9999px]'>
        <ChooseContainer />
      </div>
    </div>

  )
}

export default Banner
