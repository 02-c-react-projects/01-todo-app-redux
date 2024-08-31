import React from 'react'

export default function TodoList({todos, toggleTodo}) {

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
