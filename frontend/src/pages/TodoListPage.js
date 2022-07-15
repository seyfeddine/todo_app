import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../componenets/ListItems'


function TodoListPage() {

  

  const [todos,setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  let getTodos = async  () => {
     let response = await fetch('/todos/')  /*Put this link in another file*/
     let data = await response.json()
     setTodos(data)
  }

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; To Do</h2>
        <p className='notes-count'>{todos.length}</p>
      </div>
      <div className='todos-list'>
        {todos && todos.map((todo, index) => (
           <ListItem key={index} todo={todo}/>
        ))
        }
      </div>
    </div>
    )
}

export default TodoListPage