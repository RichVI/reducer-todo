import React from 'react';
import { Todo } from './Todo';

export const TodoList = props => {
    console.log ("TodoList Props", props)

    return(
        <div>
            {props.state.map(task => {
                console.log("TodoList task", task)
                return (
                <Todo key = {task.id} task = {task} toggleComplete={props.toggleComplete} clearComplete={props.clearComplete}/>
         )})}
        </div>
    )
}