import React from "react";
import Todo from "./Todo";

const List = ({todos,setTodos, setInputText, inputText}) =>
{



    return(
    <div className="listcontainer">
    <ul className="todolist">
        {todos.map((todo) => (
        <Todo todo={todo} text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>))}
    </ul>
        
    </div>
    );
};

export default List;