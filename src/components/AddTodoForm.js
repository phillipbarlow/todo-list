import { useState } from "react"

export default function AddTodoForm({setInput}){
    
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <form className="addTodoForm" onSubmit={handleSubmit} onChange={(e)=> setInput(e.target.value)}>
            <input type="text"/>
            <button>+</button>
        </form>
    )
}