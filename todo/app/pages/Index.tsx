import React, { useState } from 'react'
import { ITodo } from '../Interfaces/ITodo'
import { todoList } from '../data/todoList'

export const Index = () => {
  const [todos, setTodos] = useState<ITodo[]>(todoList)
  return (
    <>
    <p>TodoList</p>
    { todos.map((todo,key) => <li key={key}>{ todo.title }</li>)}
    </>
  )
}

