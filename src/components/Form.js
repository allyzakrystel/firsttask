import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Form = ({inputText, setInputText, todos, setTodos}) =>
{

    const handleInput = (e) =>
    {
    setInputText(e.target.value);
    }

    const handleAdd = (e) =>
    {
    toast.success('Task Added!', {autoClose:2000})
    e.preventDefault();
    setTodos([...todos, {id:new Date().getTime(), text: inputText, done: false}]);
    setInputText("");
    }

  
    return(
    <form className='formTodo'>

    <div className="flex justify-center mt-2">
    <div className="w-[250px] h-[50px] px-3 bg-gray-300 rounded-lg  md:w-half lg:w-10/12 xl:w-11/12">
    <div className="relative"> 

    <input className="hover:outline-black outline-dashed text-sm h-5 w-half my-4 pr-50 outline-none pl-3 md:pr-25 md:w-half lg:w-10/12 lg:h-8 lg:my-2.5" type="text" placeholder="Write a new task..." value={inputText} onChange={handleInput}>
    </input>

    <button className="btnAdd text-sm transition-all hover:bg-black border-2 border-black hover:text-white cursor-pointer text-black bg-white rounded-full w-10 h-10  md:w-10 absolute mt-1 ml-5 lg:ml-7 lg:my-1.5 xl:right-13 " 
    onClick={handleAdd}>+
    </button>

    </div> 
    </div>
    </div>

    </form>
    );


}

export default Form;