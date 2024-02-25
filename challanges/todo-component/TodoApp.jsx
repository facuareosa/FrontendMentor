import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'

function TodoApp() {
  return (
    <div className='flex flex-col px-4 bg-white'>
        <Header />
        <Input />
        <List />
    </div>
  )
}

export default TodoApp