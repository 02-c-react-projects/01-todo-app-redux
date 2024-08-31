import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../redux/store'


export default function TodoList({toggleTodo}) {
    const todos=useSelector(state => state.todos)
    // const todos=store.getState().todos;

  return (
    <div>
        <ul>
            {
                todos.map( (todo,index) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>&nbsp;&nbsp;
                        <span>{todo.isCompleted ? 'Completed' : 'Not Completed'}</span>
                        <button onClick={() => toggleTodo(index)}>Toggle</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
