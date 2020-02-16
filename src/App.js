import React, { useState } from 'react';
import "./App.css";

function Item({item, i}) {
  return (
    <div className="item">
      { item.text }
    </div>
  )
}

function ItemForm({addItem}) {
  const [textValue, setTextValue] = useState("")

  const handleButtonClick = (e)=> {
    e.preventDefault()
    if(!textValue) return
    addItem(textValue)
    setTextValue("")
  }

  return( 
    <form onSubmit={handleButtonClick}>
      <input type="text" className="input" value={textValue} onChange ={e => setTextValue (e.target.textValue)} />
    </form>
  )
}

const App = ()=> {
  const [items, setItems] = useState([])


  // const listItems = notes.map((note, i)=> 
  //   <li key={i}>{note}{"  "}<button onClick={completeItem}>&#10004;</button><button onClick={deleteItem}>&#10006;</button></li>) 


  const addItem = text => {
    const newItems = [...items, {text}]
    setItems(newItems)
  }  
 
  return (
    <div className="App">
      <ItemForm addItem={addItem}/>
      <ul>
        {items.map((item, i) => (
          <Item key={i} index={i} item={item} />
        ))}
      </ul>

    </div>
  );
}

export default App;
