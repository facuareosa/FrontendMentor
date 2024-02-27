import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'

function TodoApp() {
  const [inputValue,setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue !== '') {
      const newItem = { text: inputValue, completed: false };
      setListItems([...listItems, newItem]);
      setInputValue('');
    }else{
      alert("No se puede agregar tarea sin texto.")
    }
  };

  return (
    <div className='flex flex-col px-4 bg-white'>
        <Header />
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddItem={handleAddItem}
        />
        <List listItems={listItems} setListItems={setListItems}/>
    </div>
  )
}

export default TodoApp