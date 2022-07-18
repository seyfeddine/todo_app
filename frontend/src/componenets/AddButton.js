import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as AddIcon} from '../assets/add.svg'
import { API_URL } from '../constante'


const AddButton = () => {
  return (
    <Link to="/todo/new" className='floating-button'>
        <AddIcon/>
    </Link>
  )
}

export default AddButton