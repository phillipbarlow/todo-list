import { useState } from "react"
export default function TodoItem({onEdit,todo, onDelete,onCompletedTask}){
    const [edit,setEdit] = useState(false)
    const [editText,setEditText] = useState('')
    const [submitted, setSubmitted] = useState(false)
    function toggleEdit(){
        setEdit((curr)=> !curr)
        setEditText(todo.text)
    }
    function handleCancel(){
        setEdit((curr)=>!curr)
        setEditText("")
        setSubmitted(false)
    }
    function handleSubmit(e){
        const trimmed = editText.trim();
        console.log('submitted')
        e.preventDefault()
        if(trimmed !== ""){
            onEdit(todo.id,editText,setEdit,setEditText)
            setEditText("")
            setEdit(false)
            setSubmitted(false)
        }else{
            setSubmitted(true)
        }
    }
    return(
        <>
        {edit?(
            <li>
                <form className= "todoItem" onSubmit={handleSubmit}>
                    <input type="text" value={editText} onChange={(e)=>{setEditText(e.target.value)
                        if(submitted) setSubmitted(false)}} placeholder={todo.text} style={{outline:editText.trim() === "" && submitted? '2px solid red':'none'}}/>
                    <section className="btn-actionContainer">
                        <button type="submit">Save</button>
                        <button type="button" onClick={()=>handleCancel()}>Cancel</button>
                    </section>
                </form>
            </li>
            )
            :
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