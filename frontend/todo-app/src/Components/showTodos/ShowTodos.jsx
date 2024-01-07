import RenderTodos from "../RenderTodos";
import "./ShowTodos.css";


function ShowTodos({data}){
    // const [buttonText, setButtonText] = useState("")
    return (
        <div>
            {/* {console.log(props.todos.length)} */}

            {console.log("ShowTodos component rendered")}
            {/* {props.todos.length > 0 ? console.log(props.todos): console.log("empty")} */}
            {data.map(function(oneTodo, index){
                return (
                    <div key={index} className="one-todo">
                        <h3>{oneTodo.title}</h3>
                        <p>{oneTodo.description}</p>
                        {/* <button>Mark As Done</button> */}
                        {oneTodo.isCompleted ? <button>Done!</button> : <button>Mark As Done</button>}
                    </div>
                )
            })}
            
        </div>
    )
}

export default ShowTodos;