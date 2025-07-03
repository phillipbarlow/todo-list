export default function AddTodoForm({onAddTodo, input, setInput}){
    const newTodo = {
        id:Date.now(),
        text:input,
        completed:false
    }
    function handleSubmit(e){
        if (!input) return
        e.preventDefault()
        onAddTodo(newTodo)
        setInput("")
    }
    return(
        <form className="addTodoForm" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter todo here!"/>
            <button>+</button>
        </form>
    )
}