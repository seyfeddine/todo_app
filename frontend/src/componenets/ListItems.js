import React from "react";
import { Link } from "react-router-dom";

 
 const ListItem = ({todo}) => {
   return (
     <Link to={`/todo/${todo.id}`}>
     <h3>{todo.name}</h3>
     </Link>
   )
 }
 
 export default ListItem