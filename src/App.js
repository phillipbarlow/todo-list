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
  function handleDelete(target){
    return(
      setTodos((curr)=> curr.filter(item => item.id !== target))
    )
  }
  function handleCompletedTask(target){
    return(
      setTodos((curr)=> curr.map((task)=> target === task.id? {...task,completed:!task.completed}:task))
    )
  }
  return (
    <div className="App">
      <Header />
      <AddTodoForm setInput={setTodos} onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} onDelete={handleDelete} onCompletedTask={handleCompletedTask}/>
    </div>
  );
}

export default App;
