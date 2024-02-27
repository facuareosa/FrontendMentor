import React from 'react'
import checkImg from '../assets/images/icon-check.svg'

function ListElements({filteredList, setListItems}) {
    
    const handleErase = (index) => {
        setListItems((items) =>
          items.filter((_, i) => i !== index)
        );
      };
      const handleCompleted = (index) => {
        setListItems((items) =>
          items.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
          )
        );
      };

    const items = filteredList.map((item,index) =>{
        return (item.completed===true) 
        ?   <li className='flex justify-between' key={index}>
                <div className='flex gap-2'>
                    <span onClick={()=>handleCompleted(index)} style={{ backgroundImage: `url(${checkImg})`}} className='h-6 w-6 bg-auto bg-no-repeat bg-center rounded-full bg-black border-black border'>
                        
                    </span>
                    <p className='text-red-500'>{item.text}</p>
                </div>
                <span onClick={()=>handleErase(index)}>x</span>
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