import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { store } from '../../redux/store'
import { toggleTodo } from '../../redux/actions/todoActions'


export default function TodoList() {
    const todos=useSelector(state => state.todos) //recommanded
    // const todos=store.getState().todos;
    const dispatch = useDispatch();

  return (
    <div>
        <ul>
            {
                todos.map( (todo,index) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>&nbsp;&nbsp;
                        <span>{todo.isCompleted ? 'Completed' : 'Not Completed'}</span>
                        <button onClick={() => {dispatch(toggleTodo(index))}}>Toggle</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
