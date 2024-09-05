import React, { useState } from 'react'
import { ITodo } from '../Interfaces/ITodo'
import { todoList } from '../data/todoList'
import { Todo } from '../components/Todo'
import Image from 'next/image'
import todoIcon from '../assets/icons/todo.svg'
import addIcon from '../assets/icons/add.svg'

export const Index = () => {
  const [todos, setTodos] = useState<ITodo[]>(todoList)
  const [show, setShow] = useState<Boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [showErrors, setShowErrors] = useState<Boolean>(false)


  const addTodo = () => {
    if(title != '' && description != '') {
       let newTodo:ITodo = {
         id: todos.length + 1,
         title: title,
         description: description,
         isCompleted: false
       }
       setTodos([...todos,newTodo]);
       setShow(!show);
    }
    else{
      setShowErrors(true)
    }
  }

  const toggleComplete = (id: number) => {
    console.log("executed..")
    let todo = todos.find(todo => todo.id === id);
    todo!.isCompleted = !(todo?.isCompleted)
    console.log("todo", todo)
    setTodos([...todos])
  }

  const showModal = () => {
    setShow(!show)
  }

  return (
    <>
      <div className='w-full min-h-screen flex flex-col bg-softBlue p-10 items-center'>
        <div className='flex flex-col bg-softPurple p-4 rounded-lg w-full md:w-1/2 mt-12'>
          <div className='flex flex-row'>
            <div className='flex items-center  w-full'>
              <Image src={todoIcon} alt='todoIcon' height={35} />
              <h3 className='font-extrabold text-xl text-softBlue'>To-Do</h3>
            </div>
            <div>
              <Image className="cursor-pointer" onClick={showModal} src={addIcon} alt='todoIcon' height={35} />
            </div>
          </div>
          {todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />))}
        </div>
        {/* Add todo modal */}

        {show &&
          <div className='w-full bg-softPurple md:w-1/2 h-auto flex flex-col p-10 rounded-lg z-50 absolute bootom-50 top-50 cursor-pointer'>
            <h1 className='font-extrabold'>Add Todo</h1>
            <input className='border rounded-lg focus:outline-none p-2 mt-4' type='text' placeholder='todo title'  onChange={(e) => setTitle(e.target.value)}  required />
            {title === '' && <span className='text-red-600 font-light text-sm'>This field is required</span>}
            <input className='border rounded-lg focus:outline-none p-2 mt-2' type='text' placeholder='todo description' onChange={(e) => setDescription(e.target.value)} required/>
            {description === '' && <span className='text-red-600 font-light text-sm'>This field is required</span>}
            <button className='text-white bg-softBlue rounded-lg p-3 mt-3 w-1/2 md:w-1/3 lg:w-1/4'  onClick={() => addTodo()}>Add Todo</button>
          </div>
        }
      </div>
    </>
  )
}

