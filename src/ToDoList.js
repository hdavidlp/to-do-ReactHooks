import React from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = ({toDoList, handleToggle, handleFilter, userInput}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed 🗑</button>
            
        </div>
    );
 };
  
 export default ToDoList;

