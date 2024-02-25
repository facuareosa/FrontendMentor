function Input({ inputValue, handleChange, handleKeyDown, handleOnClick }) {
  
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
  