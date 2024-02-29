import React, { useEffect, useState } from 'react'
import moonImg from '../assets/images/icon-moon.svg'
import sunImg from '../assets/images/icon-sun.svg'

function Header() {

  const [theme, setTheme] = useState(()=>{
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      return "dark"
    }else{
      return "light"
    }
  })

  useEffect(()=>{
    if(theme==="dark"){
      document.querySelector("html").classList.add("dark");
    }else{
      document.querySelector("html").classList.remove("dark");
    }
  },[theme])

  const handleTheme = ()=>{
    setTheme(prevMode => prevMode === "light" ? "dark" : "light")
  }
  
  return (
    <div className='flex justify-between items-center p-2 bg-transparent my-8'>
        <h2 className='text-white dark:text-black text-4xl font-bold'>To Do App</h2>
        {theme === "dark" 
          ? <img onClick={handleTheme} src={sunImg} alt='boton ligh mode' className='w-5 h-5'/>
          : <img onClick={handleTheme} src={moonImg} alt='boton dark mode' className='w-5 h-5'/>
        }
        
    </div>
  )
}

export default Header