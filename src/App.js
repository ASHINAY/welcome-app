import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const SubmitbtnClick = () => {
    alert(inputValue);
  };
  const btnChange = (event) => {
    setInputValue(event.target.value);
  };
  
  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={btnChange}></input>
      <button onClick={SubmitbtnClick}>Submit</button>
    </div>
  );
}

export default App;
