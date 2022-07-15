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


  return (
    <div className='note'>
      <div className='note-header'>
      <h3>
        <Link to="/">
        <BackArrow/>
        </Link>
      </h3>
      </div>
        <textarea defaultValue={todo?.name}></textarea> 
    </div>
  )
}

export default TodoPage