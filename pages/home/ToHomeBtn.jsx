import React from 'react'
import { Link } from 'react-router-dom'

function ToHomeBtn() {
  return (
    <Link to="/" className='w-fit self-center'>
    <button className='bg-blue-950 text-white font-bold rounded-md w-fit py-1 px-4 my-8'>
        Pagina principal    
    </button>
    </Link>
    
  )
}

export default ToHomeBtn