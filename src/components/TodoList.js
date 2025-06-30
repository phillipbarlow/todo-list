import TodoItem from "./TodoItem";

export default function TodoList({todos, onDelete,onCompletedTask,onEdit}){
    return(
        <ul className="todoList">
            {todos.map((todo)=><TodoItem todos={todo} key={todo.id} onDelete={onDelete} onCompletedTask={onCompletedTask} onEdit={onEdit}/>)}
        </ul>
    )
}