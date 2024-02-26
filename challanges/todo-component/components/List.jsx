import React from 'react'
import ListElements from './ListElements'

function List({listItems, setListItems}) {
  return (
    <ul>
        <ListElements listItems={listItems} setListItems={setListItems}/>
    </ul>
  )
}

export default List