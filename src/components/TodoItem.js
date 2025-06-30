
export default function TodoItem({todo, onDelete}){
    return(
        <>
        <li className="todoItem">
            {todo.text}
            <button className="deleteBtn" onClick={()=>onDelete(todo)}>
                ❌
            </button>
        </li>
        </>
    )
}