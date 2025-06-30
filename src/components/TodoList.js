import TodoItem from "./TodoItem";

export default function TodoList({todos, onDelete}){
    return(
        <ul className="todoList">
            {todos.map((todo)=><TodoItem todo={todo} key={todo.id} onDelete={onDelete}/>)}
        </ul>
    )
}