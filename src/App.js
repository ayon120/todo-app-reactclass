import React, {Component} from 'react';
import Todos from './components/Todos' //App.js is the main file so to access the todos componets we first have to import it here
import './App.css';

class App extends Component {
  render() { 
    return ( 
      <div className = "App" >
        <Todos /> // This is the way call a component
      </div>
    );
  }
}

export default App;