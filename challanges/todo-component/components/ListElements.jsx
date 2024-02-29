import React from "react";
import IconCross from "./IconCross";
import IconCheck from "./IconCheck";

function ListElements({ filteredList, setListItems }) {
  const handleErase = (index) => {
    setListItems((items) => items.filter((_, i) => i !== index));
  };
  const handleCompleted = (index) => {
    setListItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const items = filteredList.map((item, index) => {
    return item.completed === true 
    
    ?(
      <li
        className="flex justify-between px-2 py-1 rounded-xl"
        key={index}
      >
        <div className="flex gap-2">
          <IconCheck onClick={() => handleCompleted(index)} background={"bg-gradient-to-b from-blue-900 to-blue-950"}/>
          <p className="text-gray-600 line-through">{item.text}</p>
        </div>
        <IconCross onClick={() => handleErase(index)} fill={"#FFF"} background={"bg-gradient-to-b from-blue-900 to-blue-950"}/>
      </li>
    ) 
    
    :(
      <li
        className="flex justify-between px-2 py-1 rounded-xl"
        key={index}
      >
        <div className="flex gap-2">
          <span
            onClick={() => handleCompleted(index)}
            className="h-6 w-6 rounded-full border-solid border border-gray-500 hover:cursor-pointer"
          />
          <p>{item.text}</p>
        </div>
        <IconCross onClick={() => handleErase(index)} fill={"#FFF"} background={"bg-gradient-to-b from-blue-900 to-blue-950"}/>
      </li>
    );
  });

  return <>{items}</>;
}

export default ListElements;
