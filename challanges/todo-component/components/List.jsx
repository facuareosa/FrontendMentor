import React, { useState,useEffect } from 'react'
import ListElements from './ListElements'

function List({listItems, setListItems}) {

  const [filteredList, setFilteredList] = useState(listItems)
  
  useEffect(() => {
    setFilteredList(listItems);
  }, [listItems]);

  const filterList = (mostrarTodo)=>{
    mostrarTodo 
    ? setFilteredList(listItems) 
    : setFilteredList(listItems.filter((item) => item.completed===false))
  }
  const showCompleted = ()=>{
    setFilteredList(listItems.filter((items)=> items.completed===true))
  }
  const eraseCompleted = ()=>{
    setListItems(items => items.filter(item => !item.completed))
  }
  const showTaskLeft = ()=>{
    return listItems.filter((item) => !item.completed).length;
  }
  return (
    <div>
      <ul>
          <ListElements filteredList={filteredList} listItems={listItems} setListItems={setListItems}/>
      </ul>
      <p onClick={()=>filterList(true)}>Mostrar Todos</p>
      <p onClick={()=>filterList(false)}>Mostrar solo incompletos</p>
      <p onClick={eraseCompleted}>Eliminar completos</p>
      <p onClick={showCompleted}>Mostrar Completos</p>
      <p>{showTaskLeft()}</p>
    </div>
  )
}

export default List