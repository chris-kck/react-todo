import { Input } from '@mui/material'
import React, { useState } from 'react'



function SearchBar(props) {
    const {toDoList, setToDoList, renderToDoList} = props;
    const [ filteredTodos, setFilteredTodos] = useState(toDoList); //initial state not being set. why?
    
    const handleChange = (e) =>{

        let regex = new RegExp(`${e.target.value}`);        
        let searchList = [...toDoList].filter((item)=> regex.test(item.title));
        setFilteredTodos(searchList);
        console.log(toDoList);
    }
    // // TODO improve below call - related to initial state.
  return (
    <div>
        <Input placeholder="Enter Search text" onChange={handleChange}/>
        { renderToDoList(filteredTodos!=undefined? filteredTodos : toDoList)}
    </div>
  )
}

export default SearchBar