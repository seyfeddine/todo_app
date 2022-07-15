import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Header from './componenets/Header';
import './App.css';
import TodoListPage from './pages/TodoListPage';



function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header> 
      <Routes>
      <Route path="/" exact element={<TodoListPage/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
