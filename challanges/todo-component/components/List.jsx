import React from 'react'
import ListElements from './ListElements'

function List({listItems}) {
  return (
    <ul>
        <ListElements listItems={listItems} />
    </ul>
  )
}

export default List