import { useCallback, useEffect, useState } from 'react'
import { getTodos, postTodo, deleteTodo } from '../api/Todos'

export const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    getTodos()
    .then(({data}) => setTodos(data))
    .catch(e => console.log(e))
    .finally(() => setLoading(false))
  }, [])

  const removeTodo = useCallback((id) => {
    setLoading(true)
   return  deleteTodo(id)
      .then(() => setTodos(prev => prev.filter(todo => todo.id !== id)))
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, []
  )
  const addTodo = useCallback((text) => {
    setLoading(true) 
    return postTodo(text).then(todo => setTodos(prev => [...prev, todo]))
    .catch(e => console.log(e))
    .finally(() => setLoading(false))
  }, [])

  return {todos, removeTodo, addTodo, loading}
}