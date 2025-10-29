import React from 'react'
import { addTodo, handleInput } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const {task,todos} = useSelector(state => state.myTodo);
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" value={task} onChange={() => dispatch(handleInput)}/>
        <button onClick={() => dispatch(addTodo())}>Add</button>
        <div>
            {todos.map()}
        </div>
    </div>
  )
}

export default Todo