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



function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header> 
      <Routes>
      <Route path="/" exact element={<TodoListPage/>}></Route> /* we specify exact to no render with each route , it will be true all the time */
      <Route path="/todo/:id" element={<TodoPage/>}></Route>
      <Route path="*" element={<NotfoundPage/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
