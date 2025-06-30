import TodoItem from "./TodoItem";

export default function TodoList({todos, onDelete,onCompletedTask}){
    return(
        <ul className="todoList">
            {todos.map((todo)=><TodoItem todo={todo} key={todo.id} onDelete={onDelete} onCompletedTask={onCompletedTask}/>)}
        </ul>
    )
}