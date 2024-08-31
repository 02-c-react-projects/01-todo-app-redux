
import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import TodoFrom from './components/TodoFrom'
import TodoList from './components/TodoList'

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

      {/* only these two components can access the store */}
      <Provider store={store}>      
          <TodoFrom addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
      </Provider>

    </>
  )
}

export default App
