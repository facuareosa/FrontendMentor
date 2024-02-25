import React, { useState } from "react";

function Input() {
  const [inputValue,setInputValue] = useState("")

  const handleChange = (event) =>{
    setInputValue(event.target.value)
  }
  const handleKeyDown = (event) =>{
    if (event.key === 'Enter'){
      console.log(inputValue)
      setInputValue("")
    }
  }
  const handleOnClick = () =>{
    console.log(inputValue)
    setInputValue("")
  }

  return (
    <div className="flex border border-solid border-white">
      <span>o</span>
      <input
        type="text"
        placeholder="que más agregamos?"
        value={inputValue}
        className="bg-transparent border-none w-full"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleOnClick}className="bg-white">ok!</button>
    </div>
  );
}

export default Input;
