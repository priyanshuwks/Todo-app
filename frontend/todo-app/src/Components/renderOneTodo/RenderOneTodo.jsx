import axios from "axios";
import { useState } from "react";

export default function RenderOneTodo({oneTodo}){
    const [buttonText, setButtonText] = useState(doneDecider());
    function doneDecider(){
        if(oneTodo.isCompleted === true){
            return "Done!";
        }else{
            return "Mark As Done";
        }
    }
    async function handleClick(){

        let now = false;
        if(buttonText.charAt(0) === 'D'){
            now = false;
        }else{
            now = true;
        }
        let updatedTodo = {
            _id : oneTodo._id,
            title : oneTodo.title,
            description : oneTodo.description,
            isCompleted : now
        }
        const res = await axios.put("http://localhost:3000/todo", updatedTodo);
        const apiUrl = `http://localhost:3000/todo/${oneTodo._id}`
        const getTodo = await axios.get(apiUrl);
        if(getTodo.data.oneTodo.isCompleted){
            setButtonText("Done!");
        }else{
            setButtonText("Mark As Done");
        }
    }
    return (
            <div>
                <h3>{oneTodo.title}</h3>
                <p>{oneTodo.description}</p>
                <button onClick={handleClick}>{buttonText}</button>
            </div>
    )
}