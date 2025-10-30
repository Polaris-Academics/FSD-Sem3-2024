import React from 'react'
import { addTodo, deleteTodo, handleInput } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const {task,todos} = useSelector(state => state.myTodo);
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" value={task} onChange={(e) => dispatch(handleInput(e.target.value))}/>
        <button onClick={() => dispatch(addTodo())}>Add</button>
        <div>
            {todos.map((todo,ind) => {
                return(
                    <div key={ind}>
                        <h3>{todo}</h3>
                        <button onClick={() => dispatch(deleteTodo(ind))}>Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Todo