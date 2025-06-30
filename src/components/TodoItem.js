
export default function TodoItem({todo, onDelete,onCompletedTask}){
    return(
        <>
        <li className= "todoItem">
            <section className={todo.completed? "todoItem completeTask": "todoItem"} onClick={()=>onCompletedTask(todo.id)}>
                {todo.text}
            </section>
            <button className="deleteBtn" onClick={()=>onDelete(todo.id)}>
                ❌
            </button>
        </li>
        </>
    )
}