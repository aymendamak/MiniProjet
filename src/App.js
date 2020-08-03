import React from 'react';
import './App.css';
import SideBar from './sideBar'
import ListItem from './ListItem'
import TodoList from './TodoList'


function App() {
  return (
    <div className="App">
      <div className='topApp'>
      </div>
        <p id='ToDoLabel'>Todos</p>
      <TodoList/>
    </div>
  );
}

export default App;
