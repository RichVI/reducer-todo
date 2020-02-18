import React, { useState } from 'react';

export const TodoForm = props => {

    const [newTask, setNewTask] = useState('');

    const handleChange = e => {
        setNewTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewTask(newTask);
        setNewTask("");
    }

    const clearCompleted = e => {
        e.preventDefault();
        props.clearComplete();
    }

    return(
        <div>

        <form onSubmit={handleSubmit}>
            <input type="text" name="Task" value={newTask} onChange={handleChange}/>
            <button>Add task</button>
            <button onClick={clearCompleted}>Remove Completed Task</button>
        </form>
        </div>
    )
}
