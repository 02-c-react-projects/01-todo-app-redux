import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/actions/todoActions'

export default function TodoFrom() {

    const[text, setText] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
       
        setText('')
        dispatch(addTodo(text))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}
