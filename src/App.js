import React, { useState } from 'react';

const App = ()=> {
  const [textareaValue, setTextareaValue] = useState ("")
  const [notes, setNotes] = useState([])
  const listItems = notes.map((note, i)=> <li key={i}>{note}</li>)

  const storeEnteredText = (event)=> {
    setTextareaValue(event.currentTarget.value)
  }

  const handleButtonClick = (event)=> {
    setNotes([...notes, textareaValue])
  }

  return (
    <div className="App">
      <textarea onChange={storeEnteredText}></textarea>
      <button onClick={handleButtonClick}>Save</button>
      <ul>{listItems}<button>Complete</button></ul>
    </div>
  );
}

export default App;
