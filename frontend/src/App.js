import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Header from './componenets/Header';
import './App.css';
import TodoListPage from './pages/TodoListPage';
import TodoPage from './pages/TodoPage'
import NotfoundPage from "./pages/NotfoundPage";
import PostRequest from "./componenets/PostForm";


function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
      <Header></Header> 
      <Routes>
      <Route path="/" exact element={<TodoListPage/>}></Route> /* we specify exact to no render with each route , it will be true all the time */
      <Route path="/todo/:id" element={<TodoPage/>}></Route>
      <Route path="*" element={<NotfoundPage/>}></Route>
      <Route path="/todo/new" element={<PostRequest/>}></Route>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
