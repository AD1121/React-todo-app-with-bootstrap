import React, { Component } from 'react';
import './App.css';

class App extends Component {

  todoInput = React.createRef();

  state = {   
    idTodo: 2,
    todos: [
      {
        'id': 1,
        'title': 'First'
      },
      {
        'id': 2,
        'title': 'Second'
      },
    ]
  }

  addTodo = e => {
    if(this.todoInput.current.value === '') {
      return '';
    }

    if(e.key === 'Enter'){
      const todoInput = this.todoInput.current.value;

      this.setState((prevState, props) => {
        let todos = prevState.todos;
        let idTodo = prevState.idTodo + 1;
        todos.push({
          id: idTodo,
          title: todoInput,
        });

        this.todoInput.current.value = '';

        return { todos, idTodo };
      });
    }
  }

  buttonaAddTodo = e => {
    if(this.todoInput.current.value === '') {
      return '';
    }

    const todoInput = this.todoInput.current.value;

      this.setState((prevState, props) => {
        let todos = prevState.todos;
        let idTodo = prevState.idTodo + 1;
        todos.push({
          id: idTodo,
          title: todoInput,
        });

        this.todoInput.current.value = '';

        return { todos, idTodo };
      });
  }

  deleteTodo = (index) => {
    this.setState((prevState, props) => {
      let todos = prevState.todos;
      // let idTodo = prevState.idTodo - 1;

      todos.splice( index, 1 );

      return { todos };
    });
  }

  render() {

    let todos = this.state.todos.map((todo, index) => {
      return (
        <li key={todo.id}>{todo.title}<span onClick={this.deleteTodo}>x</span></li>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-3 col-lg-3 bg-dark"> 
            <p>Simple Todo App created with React!</p>
             <input type="text" placeholder=" Add Todo ..." ref={this.todoInput} onKeyUp={this.addTodo} />
             <button onClick={this.buttonaAddTodo} className="btn btn-danger btn-sm">Add Todo</button>
          </div>
          <div className="col-xs-7 col-sm-7 col-md-9 col-lg-9"> 
            <ul>
              
              <h3>Todos</h3>
              {todos}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
