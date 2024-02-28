import React from 'react'
import moonImg from '../assets/images/icon-moon.svg'

function Header() {
  return (
    <div className='flex justify-between items-center p-2 bg-transparent my-8'>
        <h2 className='text-4xl font-bold'>To Do App</h2>
        <img src={moonImg} alt='boton dark mode' className='w-5 h-5'/>
    </div>
  )
}

export default Header