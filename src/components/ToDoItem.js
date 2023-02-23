function ToDoItem(props) {
    return (
            <div className="todo-item">
                <p 
                    className={props.todo.complete? 'completed' : 'not-complete'}
                    onClick={() => props.toggleComplete(props.todo.id)}
                >
                    {props.todo.task}
                </p>
                <span style={{cursor:"pointer"}} onClick={() => props.deleteTodo(props.todo.id)}>Delete</span>
            </div>
    );
};

export default ToDoItem;