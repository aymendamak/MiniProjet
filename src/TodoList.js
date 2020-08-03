import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import './TodoList.css'
import { Modal } from 'react-responsive-modal';

/*
  TodoMVC
  1. add todo
  2. display todos
  3. show number of active todos
  4. filter all/to do/in progress/ done
  5. delete todo
*/



export default class TodoList extends React.Component {
  state = {
    todos: [
      { id:1 ,title: 'mini projet', description: 'Telaqua', status: 'in Progress' },
      { id:2 ,title: 'Shopping', description: 'shop', status: 'To Do' },
      { id:3 ,title: 'Eat', description:'eat', status:'Done'}
    ],
    todoToShow: "all",
    toggleAllComplete: true,
    searchField: "",
    open:false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  
    
  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "To Do") {
      todos = this.state.todos.filter(todo => todo.status==='To Do');
    } else if (this.state.todoToShow === "in Progress") {
      todos = this.state.todos.filter(todo => todo.status==='in Progress');
    } else if (this.state.todoToShow === "Done") {
      todos = this.state.todos.filter(todo => todo.status==='Done');
    }

    const { searchField } = this.state;

    const fielteredTodos = todos.filter(todo => (
      todo.title.toLowerCase().includes(searchField.toLowerCase()) || todo.description.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div>
        <div id='buttonsFilter'>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("To Do")}>
            To Do
          </button>
          <button onClick={() => this.updateTodoToShow("in Progress")}>
            in Progress
          </button>
          <button onClick={() => this.updateTodoToShow("Done")}>
            Done
          </button>
        </div>

        <input id='searchBar'
        type="search"
        placeholder='search...'
        onChange={this.handleChange}
        />

        <div id='container'>
          <TodoForm onSubmit={this.addTodo} />
          <table>

                <tr>
                  <th> TITLE </th>
                  <th> DESCRIPTION </th>
                  <th> STATUS </th>
                  <th> DELETE </th>
                  <th>  </th>
                </tr>
            {fielteredTodos.map(todo => (
              <Todo
                key={todo.id}
                onDelete={() => this.handleDeleteTodo(todo.id)}
                todo={todo}
                status={todo.status}
              />
            ))}
          </table>
        </div>
      </div>
    );
  }
}
