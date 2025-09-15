import React from 'react';
import Task from "./Task";

const TaskList = ({tasks, deleteTask,toggleCheckbox,editTask}) => {
    return (
        <div>
            {tasks.map(task => (
                <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCheckbox={toggleCheckbox}
                editTask={editTask}/>
            ))}

            
        </div>
    );
};

export default TaskList;