import React from 'react';

function ToDoList({ tasks}) {
    return (
        <div>
            <h1>Tasks are:</h1>
            <div>
                {tasks.map((task,index) => (
                 <li key={index}>{task}</li>
                ))}
            </div>
        </div>);}

export default ToDoList;