import React, {useReducer} from 'react';
import {initialState, todoReducer} from './reducers/reducer';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import './App.css';

export const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("App",state, dispatch);

  const addNewTask = item => dispatch({type: "ADD_ITEM", payload: item});
  const toggleComplete = item => dispatch({ type: "TOGGLE_COMPLETE", payload: item });
  const clearComplete = item => dispatch({ type: "CLEAR_COMPLETE", payload: item });

  return (
    <div className="App">
    <h1>Todo List</h1>
    <TodoList state = {state} toggleComplete={toggleComplete} /> 
     <TodoForm addNewTask={addNewTask} clearComplete={clearComplete}/>
    </div>
  );
}