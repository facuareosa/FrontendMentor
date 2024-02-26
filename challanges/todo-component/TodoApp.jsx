import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'

function TodoApp() {
  const [inputValue,setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  const handleKeyDown = (event) =>{
    if (event.key === 'Enter'){
      const newItem = {text:inputValue, completed:false}
      setListItems([...listItems, newItem]);
      setInputValue("")
    }
  }
  const handleOnClick = () =>{
    const newItem = {text:inputValue, completed:false}
    setListItems([...listItems, newItem]);
    setInputValue("")
  }

  return (
    <div className='flex flex-col px-4 bg-white'>
        <Header />
        <Input
          inputValue={inputValue}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleOnClick={handleOnClick}
        />
        <List listItems={listItems} setListItems={setListItems}/>
    </div>
  )
}

export default TodoApp