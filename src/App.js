
import './App.css';
import React,{useState} from "react"
import Todo from './Todo';
function App() {
  const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  const handlChange=(e)=>{
        setItem(e.target.value)
  }
  const handleClick=()=>{
        setItems((olditems)=>{
              return [...olditems,item];
        });
        setItem("");
      };
      const deleteItem=(id)=>{
          console.log("deleted")
          setItems((olditems)=>{
              return olditems.filter((arr,index)=>{
                return index!==id
              });
        });
}
      
  return (
    <div className="App">
      <header className="App-header">
        <div className='box_content'>
        
            <h1 className='title'>To Do List </h1>
            <br />
            <input className='input'  value={item} type="text" placeholder='Enter item' onChange={handlChange} />
            <button onClick={handleClick} className='button'>+</button>
            
            <ul >
           
            {  items.map((itemval,index)=>{
                  return  <>
                      <Todo  key={index} id={index} text={itemval} onSelect={deleteItem}/>
                  </>
              })}
            </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
