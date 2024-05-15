import React from 'react'
import ChooseForm from './ChooseForm'
import Button from './Components/Button'

const ChooseContainer = () => (
  <div className='flex justify-center pb-[40px]'>
    <div className='h-[140px] w-[1086px] shadow-slate-500/50 shadow-lg flex justify-center rounded-[100px] border-black bg-black-500 item-center justify-between items-center pl-[130px] pr-[100px] relative'>
      <ChooseForm Text="Select Location " Tittle="PICK LOCATION" />
      <ChooseForm Text="Select Date" Tittle="PICK UP DATE" />
      <ChooseForm Text="Select Date" Tittle="PICK RETURN DATE" />
      <div className=''>
        <Button Text="Search" />


      </div>

    </div>
  </div>
)

export default ChooseContainer
