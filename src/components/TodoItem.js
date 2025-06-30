
export default function TodoItem({todos, onDelete,onCompletedTask,onEdit}){
    return(
        <>
        <li className= "todoItem">
            <section className={todos.completed? "todoItem completeTask": "todoItem"} onClick={()=>onCompletedTask(todos.id)}>
                {todos.text}
            </section>
            <button className="deleteBtn" onClick={()=>onDelete(todos.id)}>
                ❌
            </button>
        </li>
        <button onClick={()=>onEdit(todos.id)}>
            Edit {todos.text}
        </button>
        </>
    )
}