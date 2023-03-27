import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const SubmitbtnClick = () => {
    if (inputValue.trim() === ''){
      alert('Please Enter the name');
  }
  else{
    alert(inputValue);
  }
  };
  const ClearbtnClick = () => {
    setInputValue('');
  };
  const btnChange = (event) => {
    setInputValue(event.target.value);
  };
  
  return (
    <div className="App">
      <input type='text' value={inputValue} placeholder='Please enter the name' onChange={btnChange}></input>
      <button onClick={SubmitbtnClick}>Submit</button>
      <button onClick={ClearbtnClick}>Clear</button>
    </div>
  );
}

export default App;
