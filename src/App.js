
import React from 'react';
import List from './components/List'
import './App.css';

function App() {
  console.log(process.env.APIKEY)
  return(
    <List />
  )
}

export default App;
