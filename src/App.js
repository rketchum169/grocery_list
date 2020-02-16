import React, { useState } from 'react';
import "./App.css";

function Item({item, index}) {
  return (
    <div className="item">
      { item.text }
    </div>
  )
}

function ItemForm({addItem}) {
  const [textValue, setTextValue] = useState("")

  return( 
    <form onSubmit={handleButton}>
      <input type="text" className="input" value={value} />
    </form>
  )
}

const App = ()=> {
  const [items, setitems] = useState([])
  

  const storeEnteredText = (event)=> {
    setTextareaValue(event.currentTarget.value)
  }

  const handleButtonClick = (event)=> {
    setNotes([...notes, textareaValue])
  }

  const completeItem = (note)=> {

  }

  const deleteItem = (note)=> {

  }

  const listItems = notes.map((note, i)=> 
    <li key={i}>{note}{"  "}<button onClick={completeItem}>&#10004;</button><button onClick={deleteItem}>&#10006;</button></li>) 

 
  return (
    <div className="App">
      <textarea onChange={storeEnteredText}></textarea> 
      <button id="save" onClick={handleButtonClick}>Save</button>
      <ul className="item-list">
        {items.map((item, i) => (
          <Item key={index} index={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
