import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as BackArrow } from '../assets/back_arrow.svg'

const TodoPage = () => {

  const { id } = useParams();
  let [todo, setTodo] = useState(null)

  useEffect(
    () => {
        getTodo()
    } , [])

  let getTodo = async () => {
    let response = await fetch(`/todos/${id}`)
    let data = await response.json()
    setTodo(data)
  }

  let updateTodo = async () => {
      fetch(`/todos/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
      })
  }


  let deleteTodo = async () => {
    fetch(`/todos/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    })
  }

  let handleSubmit = () => {
    updateTodo()
  }

  

  return (
    <div className='note'>
      <div className='note-header'>
      <h3>
        <Link to="/">
        <BackArrow onClick={handleSubmit}/>
        </Link>
      </h3>
      <Link to="/">
      <button onClick={deleteTodo}>Delete</button>
      </Link>
      </div>
        <textarea onChange={(a) => {setTodo({...todo,'description':a.target.value})}} defaultValue={todo?.description}></textarea> 
    </div>
  )
}

export default TodoPage