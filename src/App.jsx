
import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import TodoFrom from './components/TodoFrom'
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  // const [todos, setTodos] = useState([])

  // const addTodo = (text) => {
  //   setTodos([...todos, {id: todos.length_1, text, isCompleted: false}])
  // }

  // const toggleTodo = (id) => {
  //   const list=[...todos]
  //   list[id].isCompleted = !list[id].isCompleted
  //   setTodos(list)
  // }

  
  return (
    <>
      <Provider store={store}>      
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='todos' element={
                                      <>
                                        <Navbar/>
                                        <TodoFrom/>
                                        <TodoList/>
                                      </>
                                  } 
              />
                  
              <Route path='notes' element={
                                        <>
                                          <Navbar/> 
                                          <NoteForm/>
                                          <NoteList/>
                                        </>
                                    } 
              />

          </Routes>
      </Provider>

    </>
  )
}

export default App
