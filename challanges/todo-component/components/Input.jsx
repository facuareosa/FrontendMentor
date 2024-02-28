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
    <div className="flex my-6">
      <span>o</span>
      <input
        type="text"
        placeholder="que más agregamos?"
        value={inputValue}
        className="bg-transparent border-none w-full"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddItem}className="bg-white">ok!</button>
    </div>
  );
}

export default Input;
  