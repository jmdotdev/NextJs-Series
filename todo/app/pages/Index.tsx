import React, { useState } from 'react'
import { ITodo } from '../Interfaces/ITodo'
import { todoList } from '../data/todoList'
import { Todo } from '../components/Todo'
import Image from 'next/image'
import todoIcon  from '../assets/icons/todo.svg'

export const Index = () => {
  const [todos, setTodos] = useState<ITodo[]>(todoList)
  return (
    <>
      <div className='w-full min-h-screen flex flex-col bg-softBlue p-10 items-center'>
        <div className='flex flex-col bg-softPurple p-4 rounded-lg w-full md:w-1/2 mt-12'>
         <div className='flex items-center  w-full'>
          <Image src={todoIcon} alt='todoIcon' height={35}/>
         <h3 className='font-extrabold text-xl text-softBlue'>To-Do</h3>
         </div>
          {todos.map((todo) => (<Todo key={todo.id} todo={todo} />))}
        </div>
      </div>
    </>
  )
}

