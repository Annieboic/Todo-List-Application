import './App.css';
import TaskList from "./TaskList";
import {Button, Heading, Input} from "@chakra-ui/react";
import {useState} from "react";

function App() {

    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState('');
    const[editingId, setEditingId] = useState(null);  // id here


    //delete button
    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) =>
            task.id !== id
        ))
    }

    //edit function

    const editTask = (id) => {
    const taskEdit = tasks.find(task => task.id === id); //found object
        setEditingId(taskEdit.id);
        setNewTask(taskEdit.name)

    }

    //toggle

    const toggleCheckbox = (id) => {
        setTasks((prevTasks)=> prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task))
    }




//for Add (to list) button - if editing not null / new input

    const handleAddTask = () => {

        if(editingId != null){
            setTasks((prevTasks) => prevTasks.map(task =>
            task.id === editingId ? {...task, name: newTask} : task))
            setNewTask('');
            setEditingId(null);

        } else if(newTask.trim() !== ''){
            const newTaskEntered = {id: Date.now(), name: newTask, completed: false}
            setTasks((prevTasks) => [...prevTasks, newTaskEntered])
            setNewTask('')
        }


    }
  return (
    <div className="App">

        <Heading fontWeight="semibold" mt={4}>To Do App</Heading>


        <Input placeholder="Enter Task" size="md" width={300} mt={4} value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <Button variant="outline" ml={4} onClick={handleAddTask}>
            {editingId != null ? "OK" : "Add"}</Button>


        <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleCheckbox={toggleCheckbox}
            editTask={editTask}/>

    </div>
  );
}

export default App;
