import React from 'react'
import {connect} from 'react-redux'
import {
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo
} from '../actions/todos'
import List from './List'

class Todos extends React.Component{

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleItem = (todo) => {
    this.props.dispatch(handleToggleTodo(todo))
  }

  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(this.input.value,
      () => this.input.value=''
    ))
  }

  render(){
    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add Todo" ref={(input)=> this.input=input } />
        <button type="button" onClick={this.addItem}>Add Todo</button>
        <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem}/>
      </div>
    )
  }
}

export default connect((state)=>({
  todos: state.todos
}))(Todos)
