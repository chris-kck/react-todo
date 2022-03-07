import './App.css';
import React from 'react';
import { Box, Icon, Input } from '@mui/material';
import ToDoList from 'components/ToDoList';
import SearchBar from 'components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <CustomCard test="Test Data"/> */}

      <header className="App-header">
        <h1>Advanced ToDo List App</h1>

        <Box
        sx={{
        width: 600,
        height: 500,
        backgroundColor: 'primary.dark',
        border: 'dotted 1px',
        borderRadius: 2, 
        marginBottom:3,
      }}>
        <Input placeholder='Functionality to be added' onSubmit={()=>alert('submitted')}/>
        
<ol style={{'textAlign':'left', fontSize:20, textTransform:'capitalize'}}>
        <ToDoList number={10} />
        </ol>
          
        </Box>
      </header>
    </div>
  );
}

export default App;
