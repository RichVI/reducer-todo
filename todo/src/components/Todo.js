import React from 'react';


export const Todo = props => {
    console.log("Todo Props", props)

    let taskToggle = "task ";
    const handleCompletedToggle = () => {
      props.toggleComplete(props.task);
    }

    (props.task.completed) ? taskToggle += "task-completed" : taskToggle="";
    
    return(
        <div className={taskToggle} onClick={handleCompletedToggle}>
           <ul>
               <li>{props.task.item}</li>
           </ul>
        </div>
    )
}