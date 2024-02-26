import React from 'react'
import checkImg from '../assets/images/icon-check.svg'

function ListElements({listItems, setListItems}) {
    
    const handleErase = (index) => {
        const newList = listItems.filter((_,i) => i !== index); //se utiliza _ para indicar una variable que no se usa pero es necesaria.
        setListItems(newList);
    };
    const handleCompleted = (index) =>{
        const newList = listItems.map((item,i) =>{
            if (i===index) {
                return {...item, completed: !item.completed}; 
            }
        return item;
        });
        setListItems(newList)
    }

    const items = listItems.map((item,index) =>{
        return (item.completed===true) 
        ?   <li className='flex justify-between' key={index}>
                <div className='flex gap-2'>
                    <span onClick={()=>handleCompleted(index)} style={{ backgroundImage: `url(${checkImg})`}} className='h-6 w-6 bg-auto bg-no-repeat bg-center rounded-full bg-black border-black border'>
                        
                    </span>
                    <p className='text-red-500'>{item.text}</p>
                </div>
                <span onClick={()=>handleErase}>x</span>
            </li>
        :   <li className='flex justify-between' key={index}>
                <div className='flex gap-2'>
                    <span onClick={()=>handleCompleted(index)} className='h-6 w-6 rounded-full border-solid border-black border' />
                    <p>{item.text}</p>
                </div>
                <span onClick={()=>handleErase(index)}>x</span>
            </li>;
    });
    


  return (
    <>
        {items}
    </>
  )
}

export default ListElements