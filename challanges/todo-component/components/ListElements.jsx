import React from 'react'

function ListElements({listItems}) {

    const items = listItems.map((item,index) =>(
            <li className='flex justify-between' key={index}>
                <div className='flex gap-2'>
                    <span>o</span>
                    <p>{item}</p>
                </div>
                <span>x</span>
            </li>
            ))
    


  return (
    <>
        {items}
    </>
  )
}

export default ListElements