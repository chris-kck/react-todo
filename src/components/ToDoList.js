import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, ModeEditRounded } from "@mui/icons-material";
import { Checkbox, Divider } from "@mui/material";

   

function ToDoList(props) {

  const [toDoList, setToDoList] = useState();    

  useEffect(()=>{
  getSampleTodos()
}
  ,[])
  
  const getSampleTodos = () =>{
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then((resp)=>{
      let todos = resp.data.filter((ea)=> ea.id< props.number);
      todos = todos.map((el) => 
     
        <li key={el.id}>
          <Checkbox style={{color:'white'}} onChange={(e)=> console.log(`List item ${el.id} is ${e.target.checked ? "checked": "unchecked"}` )}/>
          {el.title} 
        <ModeEditRounded onClick={()=>alert('Edit functionality')}/>
        <Delete onClick={()=>alert('Delete functionality')}/>
        <Divider/>
        </li>  
        
      
      )
      setToDoList(todos);
    })
    .catch(err=>console.log(err));
  }

  
  return (
    <div>
       {toDoList}
    </div>
  )
}

export default ToDoList;