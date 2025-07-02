import { useState } from "react"
export default function TodoItem({todos, onDelete,onCompletedTask}){
    const [edit,setEdit] = useState(false)
    const [editText,setEditText] = useState(false)
    function handleEdit(){
        setEdit((curr)=> !curr)
    }
    function handleCancel(){
        setEdit((curr)=>!curr)
    }
    return(
        <>
        {edit?(
            <li className= "todoItem">
                <input type="text" value={todos.text} onChange={(e)=>setEditText(e.target.value)}/>
                <section className="btn-actionContainer">
                    <button onClick={()=>handleEdit()}>Save</button>
                    <button onClick={()=>handleCancel()}>Cancel</button>
                </section>
            </li>):
            (<li className= "todoItem">
                <section className={todos.completed? "todoItem completeTask": "todoItem"} onClick={()=>onCompletedTask(todos.id)}  >
                    {todos.text}
                </section>
        <section className="btn-actionContainer">
            <button onClick={()=>handleEdit()}>
                Edit
            </button>
            <button className="deleteBtn" onClick={()=>onDelete(todos.id)}>
                Delete
            </button>
        </section>
        </li>)
}
        </>
    )
}