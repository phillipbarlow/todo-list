import "./App.css";
import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm";
import Header  from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([{id:1,text:"Buy milk", completed:false}])
  return (
    <div className="App">
      <Header />
      <AddTodoForm setInput={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
