import { useState } from "react"
export default function TodoItem({onEdit,todo, onDelete,onCompletedTask}){
    const [edit,setEdit] = useState(false)
    const [editText,setEditText] = useState('')
    function toggleEdit(){
        setEdit((curr)=> !curr)
    }
    function handleCancel(){
        setEdit((curr)=>!curr)
        setEditText("")
    }
    return(
        <>
        {edit?(
            <li className= "todoItem">
                <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} placeholder={todo.text}/>
                <section className="btn-actionContainer">
                    <button onClick={()=>onEdit(todo.id,editText,setEdit,setEditText)}>Save</button>
                    <button onClick={()=>handleCancel()}>Cancel</button>
                </section>
            </li>):
            (<li className= "todoItem">
                <section className={todo.completed? "todoItem completeTask": "todoItem"} onClick={()=>onCompletedTask(todo.id)}  >
                    {todo.text}
                </section>
        <section className="btn-actionContainer">
            <button onClick={()=>toggleEdit()}>
                Edit
            </button>
            <button className="deleteBtn" onClick={()=>onDelete(todo.id)}>
                Delete
            </button>
        </section>
        </li>)
}
        </>
    )
}