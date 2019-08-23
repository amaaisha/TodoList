import React from "react";
const completeStyle ={
  color: 'gray',
  textDecoration: 'line-through'

}


function TodoItem (props){

  return(
    <div className="todo-item">
      <input type="checkbox"
             checked={props.item.completed}
             onChange={() => props.handleChange(props.item.id)

             }
      />

      <p style={props.item.completed ? completeStyle : null} >
        {props.item.text} </p>



    </div>
  )
}



export default TodoItem;
