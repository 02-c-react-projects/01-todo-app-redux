
import { useState } from 'react'
import './App.css'
import TodoFrom from './TodoFrom'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, {id: todos.length_1, text, isCompleted: false}])
  }

  const toggleTodo = (id) => {
    const list=[...todos]
    list[id].isCompleted = !list[id].isCompleted
    setTodos(list)
  }

  return (
    <>
      <h1>Todo App</h1>
      <TodoFrom addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App
