import React, { Component, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')


  const handleOnChange = (e) => {
  setValue(e.target.value) 
}
console.log(value) 
 
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={handleOnChange}/>
        <p className="repeater">{value}</p>
      </div>
    );
}

export default App;
