import "./App.css";
import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm";
import Header  from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([{id:1,text:"Buy milk", completed:false}])
  function handleAddTodo(todo){
    
    return(
      setTodos((curr)=>[...curr,todo])
    )
  }
  return (
    <div className="App">
      <Header />
      <AddTodoForm setInput={setTodos} onAddTodo={handleAddTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
