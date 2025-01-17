import { useState } from 'react';
import './App.css';
import {Task} from './Task';
import Navbar from './Navbar';


function App() {

  const [todolist, setTodolist] = useState([]);
  const [newTask,setNewTask]=useState()

  const HandleChangeEVent = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1:todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodolist(task.taskName !== " " ? [...todolist, task] : todolist);
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodolist(todolist.map((task) => {
      if(task.id === id){
        return {...task, completed:true}
      }
      else{
        return task
      }
    }))
  }
  return (
    <div className="App">
      <Navbar/>
      <div className='addTask'>
            <input type="text" placeholder="Add a new task"  onChange={HandleChangeEVent}/>
            <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task)=>{
          return (
             <Task
             taskName= {task.taskName}
             id={task.id}
             completed={task.completed}
             deleteTask={deleteTask}
             completeTask={completeTask}
             />
          );
        })}
      </div>
</div>
  );
}

export default App;
