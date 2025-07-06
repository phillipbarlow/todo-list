import { useState } from "react";

export default function AddTodoForm({onAddTodo, input, setInput}){
    const [submitted,setSubmitted] = useState(false)
    const newTodo = {
        id:Date.now(),
        text:input,
        completed:false
    }
    function handleSubmit(e){
        e.preventDefault();
       if(input.trim() !== ""){
            onAddTodo(newTodo);
            setInput("");
        }else{
            // input goes red
            setSubmitted(true)
        }
    }
    return(
        <form className="addTodoForm" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)
                if(submitted)setSubmitted(false)}} placeholder="Enter todo here!" style={{outline:input.trim() === "" && submitted? "2px solid red" : ""}} />
            <button>+</button>
        </form>
    )
}