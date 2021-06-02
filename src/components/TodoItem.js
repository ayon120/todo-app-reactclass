import React, { Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    
getStyle = () => {
    return {  
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
}

// we will try to use arrow functions as it can use the props directly instead of using bindings
// as we are not using redux, context api or rendering props so when changing states we shall have to look at the order more carefull asto how and where to change component drilling

render() { 
     const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}> {/*<div style={ {backgroundColor: '#f4f4f4'} }> inline style  or like a function style={itemStyle}*/}
             <h5>
                 <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>  {/* Eventhandling such as onClick, onSubmit, preventDefault etc*/}
                 {title}
                 <button >D</button>
             </h5>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem;