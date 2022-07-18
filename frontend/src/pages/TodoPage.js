import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as BackArrow } from '../assets/back_arrow.svg'
import { API_URL } from '../constante';


const TodoPage = () => {

  const { id } = useParams();
  let [todo, setTodo] = useState(null)

  useEffect(
    () => {
        getTodo()
    } , [])

  let getTodo = async () => {
    if(id === 'new') return

    let response = await fetch(`${API_URL}/todos/${id}`)
    let data = await response.json()
    setTodo(data)
  }

  let updateTodo = async () => {
      fetch(`${API_URL}/todos/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
      })
  }

  let createTodo = async () => {
    fetch(`${API_URL}/todos/`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:todo?.name, description:"bla",state:"UNDONE"})
    })
}


  let deleteTodo = async () => {
    fetch(`${API_URL}/todos/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    })
  }

  let handleSubmit = () => {
    if(id !== 'new' && !todo.description){deleteTodo()}
    else if(id !== 'new'){updateTodo()}
    else if(id === 'new' && todo !== null){createTodo()} 
  }

  

  return (
    <div className='note'>
      <div className='note-header'>
      <h3>
        <Link to="/">
        <BackArrow onClick={handleSubmit}/>
        </Link>
      </h3>
      {id !== 'new' ? (
        <Link to="/ ">
        <button onClick={deleteTodo}>Delete</button>
        </Link>
      ):(
        <Link to="/ ">
      <button onClick={handleSubmit}>Done</button>
      </Link>
      )}
      
      </div>
        <textarea onChange={(a) => {setTodo({...todo,'description':a.target.value})}} defaultValue={todo?.description}></textarea> 
    </div>
  )
}

export default TodoPage