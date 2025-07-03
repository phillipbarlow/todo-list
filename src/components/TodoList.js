import TodoItem from "./TodoItem";

export default function TodoList({todos,onEdit, onDelete,onCompletedTask}){
    return(
        <ul className="todoList">
            {todos.map((todo)=> <TodoItem onEdit={onEdit} todo={todo} key={todo.id} onDelete={onDelete} onCompletedTask={onCompletedTask}/>)}       
        </ul>
    )
}