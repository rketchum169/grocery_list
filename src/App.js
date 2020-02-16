import React, { useState } from 'react';
import "./App.css";

function Item({item, index, completeItem, deleteItem}) {
  return (
    <div 
    className="item"
    style={{ textDecoration: item.isCompleted ? "line-through" : "" }} 
    >
      <li>
        { item.text }
        <button onClick={()=> completeItem(index)}>&#10004;</button>
        <button onClick={()=> deleteItem(index)}>&#10006;</button>
      
      </li>

    </div>
  )
}

function ItemForm({addItem}) {
  const [textValue, setTextValue] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(!textValue) return
    addItem(textValue)
    setTextValue("")
  }

  return( 
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      value={textValue} 
      placeholder="Add Item..."
      onChange ={e => setTextValue (e.target.value)} />
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

  const completeItem = index => {
    const newItems = [...items]
    newItems[index].isCompleted = true;
    setItems(newItems)
  }

  const deleteItem = index => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }
 
  return (
    <div className="App">
      <ItemForm addItem={addItem}/>
      <ul>
        {items.map((item, index) => (
          <Item key={index} index={index} item={item} completeItem={completeItem} deleteItem={deleteItem} />
        ))}
      </ul>

    </div>
  );
}

export default App;
