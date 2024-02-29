function Input({ inputValue, setInputValue, handleAddItem }) {
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };
  return (
    <div className="flex justify-between p-2 my-6 bg-gray-300 rounded-xl shadow-xl shadow-black dark:shadow-slate-400">
      <div className="flex items-center w-full gap-2">
        <span className='h-6 w-6 rounded-full border-solid border border-gray-500'></span>
        <input
          type="text"
          placeholder="que más agregamos?"
          value={inputValue}
          className="bg-transparent w-3/4 border-none focus:outline-gray-500 placeholder:text-gray-600"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button onClick={handleAddItem} className="h-7 w-7 px-1 rounded-md bg-gradient-to-b from-blue-900 to-blue-950 text-white">OK!</button>
    </div>
  );
}

export default Input;
  