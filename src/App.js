import React, {Component} from 'react';
import Todos from './components/Todos'; //App.js is the main file so to access the todos componets we first have to import it here
import './App.css';

class App extends Component {
  state = {  /*This is the way set up state*/
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Go to market",
        completed: true
      },
      {
        id: 3,
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

  render() { 
    return ( 
      <div className = "App" > 
        <Todos todos={this.state.todos} markComplete={this.markComplete} /> {/*This is the way call a component, with todos function we are sending the state as props/property for Todos class to access which in todos, todos sends to todoitems*/}
      </div>
    );
  }
}

export default App;