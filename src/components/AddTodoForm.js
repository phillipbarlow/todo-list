import { useState } from "react"

export default function AddTodoForm({onAddTodo}){
    const [input,setInput] = useState('')
    const newTodo = {
      id:Date.now(),
      text:input,
      completed:false
    }
    function handleSubmit(e){
        e.preventDefault()
        onAddTodo(newTodo)
        setInput("")
    }
    return(
        <form className="addTodoForm" onSubmit={handleSubmit}>
            <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
            <button>+</button>
        </form>
    )
}