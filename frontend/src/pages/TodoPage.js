import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

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
    <div>
        <h1>{todo?.name}</h1> 
    </div>
  )
}

export default TodoPage