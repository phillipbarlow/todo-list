import "./App.css";
import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm";
import Header  from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([{id:1,text:"Buy milk", completed:false}])
  const [input,setInput] = useState('')
   function handleEdit(id,newEdit,toggleEditMode){
    if(!newEdit) return
    setTodos((curr)=> curr.map((todo)=> todo.id === id?{...todo,text:newEdit}: todo))
    toggleEditMode(false)
  }
  function handleAddTodo(todo){
    setTodos((curr)=>[...curr,todo])
  }
  function handleDelete(target){
    setTodos((curr)=> curr.filter(item => item.id !== target))
  }
  function handleCompletedTask(target){
    setTodos((curr)=> curr.map((task)=> target === task.id? {...task,completed:!task.completed}:task))
  }

  return (
    <div className="App">
      <Header/>
      <AddTodoForm setInput={setInput} onAddTodo={handleAddTodo} input={input}/>
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} onCompletedTask={handleCompletedTask}/>
    </div>
  );
}

export default App;
