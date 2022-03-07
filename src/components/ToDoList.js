import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, ModeEditRounded } from "@mui/icons-material";
import { Checkbox, Divider } from "@mui/material";
import SearchBar from "./SearchBar";

   

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
      setToDoList(todos);
    })
    .catch(err=>console.log(err));
  }

  const handleDelete = (id, e) =>{
    //Localstorage delete item.
    setToDoList(
      toDoList.filter((item)=> item.id!=id)
    )

  }

  const renderToDoList = (myList) => {
    if (myList){
    return myList.map((el) => 
     
        <li key={el.id}>
          <Checkbox style={{color:'white'}} onChange={(e)=> console.log(`List item ${el.id} is ${e.target.checked ? "checked": "unchecked"}` )}/>
          {el.title} 
        <ModeEditRounded onClick={()=>alert('Edit functionality')}/>
        <Delete onClick={(e)=>handleDelete(el.id , e)}/>
        <Divider/>
        </li>  
      ) 
    }
  }
  
  return (
    <div>
      <SearchBar toDoList={toDoList} setToDoList={setToDoList} renderToDoList={renderToDoList}/>
    </div>
  )
}

export default ToDoList;