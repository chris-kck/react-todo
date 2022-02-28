import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Avatar, Box, Button, Card, Chip, Divider, IconButton, Stack, Switch, Typography} from '@mui/material';
import { LocationOn, Edit } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import CustomCard from './components/CustomCard';

function App() {
  return (
    <div className="App">
      <CustomCard test="Test Data"/>

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color='secondary'> First Buttons</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
