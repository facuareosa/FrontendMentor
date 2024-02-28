import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import bgDesktop from './assets/images/bg-desktop.jpg'

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
    <div className='flex justify-center items-center h-screen font-concert relative'>
      <img src={bgDesktop} alt="fondo" className='absolute top-0 z-[-1] w-screen'/>
      <div className='flex flex-col px-4 w-80 md:w-96'>
          <Header />
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAddItem={handleAddItem}
          />
          <List listItems={listItems} setListItems={setListItems}/>
      </div>
    </div>
  )
}

export default TodoApp