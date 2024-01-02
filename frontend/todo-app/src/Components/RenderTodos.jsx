
function RenderTodos(props){
    return (
        <div>
            {props.todos.map(function(oneTodo, index){
                return (
                    <div>
                        <h3>{oneTodo.title}</h3>
                        <p>{oneTodo.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RenderTodos;