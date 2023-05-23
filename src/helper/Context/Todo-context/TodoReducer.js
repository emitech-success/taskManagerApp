import { ADD_TODO, DELETE_TODO, FIND_TODO_BY_ID, TOGGLE_TODO_COMPLETE, UPDATE_TODO } from './TodoTypes'

const TodoReducer = (state, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload], 
      }

      case UPDATE_TODO:
        return{
          ...state,
          todos:todos.map((todo) =>
            todo.id ===payload.id ? {...todo, title:payload.title}:todo
          )
        }

    case TOGGLE_TODO_COMPLETE:
      return {
        ...state,
        todos: todos.map((todo) => {
          console.log(todo.id, payload)
          if (todo.id === payload) {
            const updatedTodo = {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
            return updatedTodo
          } else {
            return todo
          }
        }),
      }

      case DELETE_TODO:
      return{
        ...state,
        todos : todos.filter((todo) => todo.id !== payload)
      }

case FIND_TODO_BY_ID:
  return{
    ...state,
    todo:todos.find((todo) => todo.id === payload)
    
  }

    default:
      return state
  }
}

export default TodoReducer
