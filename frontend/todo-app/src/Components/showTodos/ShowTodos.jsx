
import RenderOneTodo from "../renderOneTodo/RenderOneTodo";
import "./ShowTodos.css";


function ShowTodos({data}){
    // const [buttonText, setButtonText] = useState("")
    let buttonText = "";

    return (
        <div>
            {/* {console.log(props.todos.length)} */}

            {console.log("ShowTodos component rendered")}
            {/* {props.todos.length > 0 ? console.log(props.todos): console.log("empty")} */}
            {data.map(function(oneTodo, index){
                return (
                    <div key={index} className="one-todo">
                        <RenderOneTodo oneTodo={oneTodo}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ShowTodos;