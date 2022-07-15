import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


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
    <div>
      <div className='todos-list'>
        {todos && todos.map((todo, index) => (
           <Link to={`/todo/${todo.id}`}>
          <h3 key={index}>{`${todo.name} - ${todo.description} - ${todo.state}`}</h3>
          </Link>

        ))
        }
      </div>
    </div>
    )
}

export default TodoListPage