import React from "react";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Todo = ({text,todos,setTodos, todo, setInputText, inputText}) =>
{
  const handleComplete = () =>
  {
    toast.success('Task Completed!', {autoClose:2000})
        setTodos(todos.map(item => 
        {
            if(item.id===todo.id)
            {
                return {
                ...item, done: !item.done,
                       };
            }
            return item;
        }))          
  };     

  const handleEdit = () => 
  {
    toast.warning('Editing task...', {autoClose:2000})
    setTodos(todos.map(editText => 
    {
      if(editText.id===todo.id)
      {
        setInputText(text);
      return {
        ...editText, text: inputText,       
             }; 
      }
    return editText;
    }))
  };

  const handleDelete = () => 
  {
  toast.success('Task Deleted!', {autoClose:2000})
  setTodos(todos.filter((el) => el.id !== todo.id));
  };
 

    return(
      <li className=" mt-2 ml-2 indent-1" id="1" >
      <div className="flex gap-2 lg:ml-2 xl:ml-5 2xl:ml-10">
      
      <div className="w-9/12 ml-1 sm:w-10/12 h-10 bg-black text-white rounded-[7px] flex justify-start items-center px-2"> 
      <input className="accent-red-500 cursor-pointer" type='checkbox' onClick={handleComplete}></input>
      {text}
      </div>
     
      <button className="btnEdit bg-edit bg-cover text-white w-7 h-7 mt-1.5 -mr-1 transition-all cursor-pointer" onClick={handleEdit}></button>
      <button className="btnDelete bg-delete bg-cover text-white w-7 h-7 mt-1.5 transition-all cursor-pointer" onClick={handleDelete}></button>   
      </div>
    </li>
    
  );

}
export default Todo;