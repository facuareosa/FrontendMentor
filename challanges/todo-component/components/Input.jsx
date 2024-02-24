import React from 'react'

function Input() {
  return (
    <div className='flex border border-solid border-white'>
        <span>o</span>
        <input type="text" placeholder='que más agregamos?' className='bg-transparent border-none w-full'/>
        <button className='bg-white'>ok!</button>
    </div>
  )
}

export default Input