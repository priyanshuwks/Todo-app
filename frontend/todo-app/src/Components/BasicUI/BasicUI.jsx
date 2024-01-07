import { useEffect, useState } from "react";
import "./BasicUI.css";
import ShowTodos from "../showTodos/ShowTodos";
import Dummy from "../Dummy";
import axios from "axios"

function BasicUI(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([{
        title : 'first todo',
        description : 'first description'
    }]);

    useEffect(function(){
        fetchTodos();
    },[]);
    function handleTitleChange(e){
        setTitle(e.target.value);
    }
    function handleDescChange(e){
        setDesc(e.target.value);
    }
    function handleAddTodo(){
        saveTodo();
    }
    async function saveTodo(){
        const newTodo = {
            title : title,
            description : desc,
            isCompleted : false
        }
        await axios.post("http://localhost:3000/todo", newTodo);
        setTitle("");
        setDesc("");
        
    }
    async function fetchTodos(){
        const res = await axios.get("http://localhost:3000/todo");
        console.log(res);
        setTodos(res.data.todos);
    }
    return (
        <div className="container">
            <div className="input-div">
                <div className="input-div-inner">
                    <input onChange={handleTitleChange} value={title} type="text" className="inputs" placeholder="title"/>
                    <input onChange={handleDescChange} value={desc} type="text" className="inputs" placeholder="description"/>
                    <button className="add-todo-btn" onClick={handleAddTodo}>Add Todo</button>
                </div>
            </div>
            <div className="todo-div">
                <ShowTodos data={todos}/>
            </div>
        </div>
    )
}
function RenderMyTodo(todos){
    return (
        <div>
            {/* {todos.map(function(single, index){
                return (
                    <>
                        <h3>{single.title}</h3>
                        <p>{single.description}</p>
                    </>
                )
            })} */}
            {console.log("length of array: " + todos.length)}
            {console.log("Render component called")}
        </div>
    )
}

export default BasicUI;