import React, { Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //for checking/validarting the types passed in the props object 
// A new class component was created under Components folder named Todos

class Todos extends Component {
    // only class component have render where functional components doesn't
    
    
    render() {  
        //console.log(this.props.todos);
        return this.props.todos.map((todo) => (
             <TodoItem key= {todo.id} todo= {todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>  /* map fuction is more like for each where we are iterating through the props array & key is needed for each element to tracklist items, we are also sendind props, todo is a prop where we are sending our previous props and sending them direcly and markComplete is also created here for changing state, you can only change state as where you declared state */
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
