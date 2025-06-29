import TodoItem from "./TodoItem";

export default function TodoList({todos}){
    return(
        <ul className="todoList">
            {todos.map((todo)=><TodoItem todo={todo} key={todo.id}/>)}
        </ul>
    )
}