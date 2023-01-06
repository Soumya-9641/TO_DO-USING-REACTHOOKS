import React from 'react'
import {ImCross} from 'react-icons/im';
import "./Todo.css"
 const Todo = (props) => {
    
  return (
    <div className='main_container'>
    <div className='icon_main'>
                  <ImCross className='icon' onClick={()=>{
                    props.onSelect(props.id)
                  }} />
                  <ul >
                  
                {props.text}
              </ul></div> 
              </div>
  )
}

export default Todo;