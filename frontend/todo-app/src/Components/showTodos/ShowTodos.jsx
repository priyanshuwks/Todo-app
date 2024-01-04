import RenderTodos from "../RenderTodos";


function ShowTodos(props){
    return (
        <div>
            {/* {console.log(props.todos.length)} */}

            {console.log("ShowTodos component rendered")}
            {/* {props.todos.length > 0 ? console.log(props.todos): console.log("empty")} */}
            {props.todos.map(function(oneTodo, index){
                return (
                    <div key={index}>
                        <h3>{oneTodo.title}</h3>
                        <p>{oneTodo.description}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ShowTodos;