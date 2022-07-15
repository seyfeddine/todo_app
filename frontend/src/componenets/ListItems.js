import React from "react";
import { Link } from "react-router-dom";

 
 const ListItem = ({todo}) => {
   return (
     <Link to={`/todo/${todo.id}`}>
        <div className="notes-list-item">
        <h3> {todo.name} {todo.description} {todo.state}</h3>
        </div>
     
     </Link>
   )
 }
 
 export default ListItem