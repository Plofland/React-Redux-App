import React from 'react';
import { getQR } from './actions';
import './App.css';

function App() {
  //make a new slice of state
  //would this be local state?
  //would I have to add it to the store so that the action can have access to it?

  //add a submit handler here
  const handleSubmit = () => {
    getQR();
    //set state here with URL value (e.target.value)
  };

  return (
    <div className="App">
      <h1>Change any URL into a QR Code</h1>
      <input type="text" value={URL} placeholder="Paste URL here"></input>
      {/* add a click listener here */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
