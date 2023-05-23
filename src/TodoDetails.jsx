import React, { useContext, useEffect, useState } from 'react'

import TodoContext from './helper/Context/Todo-context/TodoContext'
import { useParams } from 'react-router-dom'

// import TodoReducer from './helper/Context/Todo-context/TodoReducer'


const TodoDetails = () => {
 const {todo_id} = useParams()
 const { findTodoById, todo} = useContext(TodoContext)
 

useEffect(() =>{
    findTodoById(todo_id)
}, [])
 
 return (
    <div>
<li> id: {todo_id}</li>
<li>  Title:{todo.title} </li>
<li>Status:{todo.isCompleted ? 'Done' : 'Pending'} </li>
        
    </div>
  )
}

export default TodoDetails