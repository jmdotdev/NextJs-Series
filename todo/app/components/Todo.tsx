import React from 'react'
import {ITodo}  from '../Interfaces/ITodo'

export interface TodoProps {
    todo: ITodo,
    toggleComplete: any
}

export const Todo:React.FC<TodoProps> = ({ todo,toggleComplete }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg h-18 p-2 mt-2 first:pt-4'>
      <div>
      <h4 className='font-bold'>{todo.title}</h4>
      </div>
      <div className='flex mt-1'>
        <input className='mr-1 border border-bg-softBlue accent-softBlue' type='checkbox' checked={todo.isCompleted} onClick={() => toggleComplete(todo.id)}/>
        <p className={todo.isCompleted ? 'text-xs line-through' : 'text-xs'}>{todo.description}</p>
      </div>
    </div>
  )
}
