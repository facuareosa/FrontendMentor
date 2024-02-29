import React from 'react'
import FAQ from './components/FAQ'
import ToHomeBtn from '../../pages/home/ToHomeBtn'


function AcordeonApp() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-900'>
        <FAQ/>
        <ToHomeBtn />
    </div>
  )
}

export default AcordeonApp