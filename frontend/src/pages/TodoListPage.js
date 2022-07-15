import React, {useState, useEffect} from 'react'


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
          <h3 key={index}>{`${todo.name} - ${todo.description} - ${todo.state}`}</h3>

        ))
        }
      </div>
    </div>
    )
}

export default TodoListPage