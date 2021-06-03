import React, { Component} from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value}); //assigning state value title form input field

    onSubmit = (e) => {
        e.preventDefault(); //stop default behavior prevent a browser reload/refresh
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() { 
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}> 
                <input type="text" name="title" placeholder="Add to Todo List..." className="addinput" style={{flex : '11'}} value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="submit" className="btn" style={{flex : '1'}}/>
            </form>
        )
    }
}

export default AddTodo;