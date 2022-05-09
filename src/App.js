import {React,useEffect,useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import logo from './img/logo.png';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {
  var moment = require('moment');
  let dayToday,dateToday;
  dayToday= moment().format("dddd");
  dateToday= moment().format("MMMM DD, YYYY");

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchTodos, setSearchTodos] = useState([]);

  useEffect(() => 
  {
    getTodos();
  }, []);


useEffect(() => 
  {
    saveTodos();
  }, [todos]);

const saveTodos = () =>
{
localStorage.setItem("TODOS", JSON.stringify(todos));
}

const getTodos = () =>
{
if(localStorage.getItem("TODOS") === null)
{
localStorage.setItem("TODOS", JSON.stringify([]));
}
else
{
let todoLocal = JSON.parse(localStorage.getItem("TODOS"));
setTodos(todoLocal)
console.log(todoLocal)
}
}

  const handleSearch = (e) =>
  {
  const searchWord = e.target.value
  const newFilter = todos.filter((value) => {
  return value.text.toLowerCase().includes(searchWord.toLowerCase());  
  });
  if(searchWord==="")
  {
    setSearchTodos([]);
  }
  else
  {
  setSearchTodos(newFilter);
  }
  };

  return (
    <div className='toDoApp grid grid-cols-1 sm:grid-cols-2'>
  
    <div className="cursor-default bg-webbg bg-no-repeat bg-cover w-full h-[200px] sm:mt-6 sm:h-[855px] md:w-21 md:h-[840px] md:mt-10 xl:h-[935px] ">

    <nav className='fixed bg-black h-10 w-[767px] sm:-mt-6 md:w-[1023px] md:-mt-10 lg:w-[1279px] xl:w-[1535px] 2xl:w-[10000px]'>
    <img src={logo} className='w-10 h-10 top-0 left-0 right-40 absolute' alt='logo'></img>
    </nav>

    <header className=' text-2xl font-orelega text-center leading-7 tracking-widest mt-12 sm:mt-[290px] md:mt-[250px] md:text-center md:ml-0 lg:mt-[225px] xl:mt-[225px] 2xl:mt-[250px]'>
    <span className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl'>T</span>
    <span className='sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl '>ASK</span><br></br>
    <span className='sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'>ORGANIZER</span>
    </header>
    <p className='font-quick text-xs sm:text-sm bg-gray-300 mt-5 text-center tracking-tight border rounded-lg border-black md:text-base md:mt-10 lg:text-lg lg:mt-[50px] lg:pt-2 lg:pb-2 xl:text-2xl xl:mt-[80px] xl:pt-3 xl:pb-3 '>a to-do-list application that will help you organize your task</p>
    
    </div>

    <div className='sm:mt-10  md:mt-10 bg-white border-solid border-2 '>

    <input onChange={handleSearch} type='text' placeholder='Search...' className='border-black border rounded-xl w-[150px] md:w-[200px] lg:w-[250px] fixed top-2 left-30 right-0 sm:mt-0.5 md:mt-0.5 text-center text-sm '></input>
    
    {searchTodos.length !==0 && (
    <div className='searchcontainer cursor-not-allowed fixed top-10 right-0 w-[150px]  sm:w-[150px] md:w-[200px] lg:w-[250px] text-center border-black border bg-slate-300'>
    {searchTodos.slice(0,10).map((value) => {
      return (<div>{value.text}</div>);
    })}
    </div>)}

    <h1 className='sm:mt-10 text-center text-xl sm:text-xl lg:text-2xl font-orelega uppercase text-black leading-loose tracking-widest mt-3 cursor-default'>{dayToday}</h1>
    <h2 className='text-center text-xs sm:text-sm lg:text-base font-overpass tracking-wide cursor-default'>{dateToday}</h2>
    <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
    <List todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} searchTodos={searchTodos} setSearchTodos={setSearchTodos}/>
    </div>

    

    </div>
    
  );
}

export default App;
