import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos'; //App.js is the main file so to access the todos componets we first have to import it here
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import { Container, Col, Row } from "react-bootstrap";
//import * as bs from "react-bootstrap";
import './App.css';
import {v4 as uuid} from 'uuid'; //uuid package installed for generating unique ids

class App extends Component {
  state = {  /*This is the way set up state*/
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Go to market",
        completed: true
      },
      {
        id: uuid(),
        title: "Complete homework",
        completed: false
      }
    ]
  }

  markComplete = ( id ) => {
    this.setState ({todos: this.state.todos.map(todo => {
      if(todo.id===id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]  //...is speread opearation where we are creatinga copy of an object by iteration it. basically here we are creating a copy of our state obhect and and when clicked the button we are creating an object without the id which was clicked so it feels like it was deleted
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() { 
    return ( 
    <Router> 
      <div className = "App" > 
        <div className = "container">
          <Header />
          <Route exact path="/" render={props => (    //routed homepage with 2 components with exact which distinguished the pages
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> {/*This is the way call a component, with todos function we are sending the state as props/property for Todos class to access which in todos, todos sends to todoitems*/}
            </React.Fragment>
          ) } />
          
          <Route path = "/about" component={About} />
        </div>
      </div>
      </Router> 
    );
  }
}

export default App;