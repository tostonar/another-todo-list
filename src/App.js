import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [...todosData]
    }
  }

  handleChange =( id )=> {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }

}

export default App;
