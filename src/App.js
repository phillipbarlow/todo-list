import "./App.css";
import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm";
import Header  from "./components/Header";
function App() {
  const [input, setInput] = useState()
  return (
    <div className="App">
      <Header />
      <AddTodoForm setInput={setInput}/>
    </div>
  );
}

export default App;
