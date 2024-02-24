import React from 'react'
import Header from './components/Header'
import Input from './components/Input'

function TodoApp() {
  return (
    <div className='container w-80 flex flex-col'>
        <Header />
        <Input />
    </div>
  )
}

export default TodoApp