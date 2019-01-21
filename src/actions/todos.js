import API from 'goals-todos-api'

export const ADD_TODO='ADD_TODO'
export const REMOVE_TODO='REMOVE_TODO'
export const TOGGLE_TODO='TOGGLE_TODO'

function addToDo(todo){
        return {
          type: ADD_TODO,
          todo
        }
      }

function removeToDo(id){
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleToDo(id){
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function handleAddTodo(name,cb){
  return (dispatch) => {
    return API.saveTodo(name)
    .then((todo) => {
      dispatch(addToDo(todo))
      cb()
    })
    .catch(() => {
       alert('Unable to add item. Try again')
       cb()
    })
  }
}

export function handleToggleTodo(todo){
  return (dispatch) => {
    dispatch(toggleToDo(todo.id))

    return API.saveTodoToggle(todo.id)
    .catch(() => {
       dispatch(toggleToDo(todo.id))
       alert('An error occurred. Try again')
    })
  }
}

export function handleDeleteTodo(todo){
  return (dispatch) => {
    dispatch(removeToDo(todo.id))
    return API.deleteTodo(todo.id)
    .catch(() => {
       dispatch(addToDo(todo))
       alert('An error occurred. Try again')
    })
  }
}
