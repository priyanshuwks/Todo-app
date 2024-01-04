import { useEffect, useState } from "react";
import "./BasicUI.css";
import ShowTodos from "../showTodos/ShowTodos";
import Dummy from "../Dummy";

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
        const save = await fetch("http://localhost:3000/todo",{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        })
        // console.log(save);
    }
    async function fetchTodos(){
        const response = await fetch("http://localhost:3000/todo");
        const res_json = await response.json();
        setTodos(res_json.data);
        // console.log("todos" + todos);
        console.log(res_json.data);
    }
    return (
        <div className="container">
            <div className="input-div">
                <div className="input-div-inner">
                    <input onChange={handleTitleChange} type="text" className="inputs" placeholder="title"/>
                    <input onChange={handleDescChange}type="text" className="inputs" placeholder="description"/>
                    <button className="add-todo-btn" onClick={handleAddTodo}>Add Todo</button>
                </div>
            </div>
            <div className="todo-div">
                {/* <ShowTodos todo={todos}/> */}
                {/* {todos.length > 0? <ShowTodos todos={todos}/> : <Dummy />} */}
                {RenderMyTodo()}
            </div>
        </div>
    )
}
function RenderMyTodo(todos){
    return (
        <div>
            {todos.map(function(single, index){
                return (
                    <>
                        <h3>{single.title}</h3>
                        <p>{single.description}</p>
                    </>
                )
            })}
        </div>
    )
}

export default BasicUI;