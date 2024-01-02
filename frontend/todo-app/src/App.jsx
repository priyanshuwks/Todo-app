import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import RenderTodos from './Components/RenderTodos';

function App() {
  const [todos, setTodos] = useState([{
    title : "title1",
    description : "description1"
  }]);

  async function addTodo(){
    const res = await fetch("http://localhost:3000/todo")
    
    const data =await res.json();

    setTodos(data.value);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <RenderTodos todos={todos}/>
        
    </div>
  )
}
// function RenderTodos(props){
//   return(
//     <div>
//       {props.todos.map(function(oneTodo, index){
//         return (
//           <div key={index}>
//             <h3>{oneTodo.title}</h3>
//             <p>{oneTodo.description}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

export default App
