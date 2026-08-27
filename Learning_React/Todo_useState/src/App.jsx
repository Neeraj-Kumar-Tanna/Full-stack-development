import React, { useState } from 'react'

const App = () => {

  let [tasks , setTasks] = useState(["play" , "read" , "write" , "code"]);

  function addTask(name){
    // event.preventDefault();
    setTasks([...tasks , name]);
    
  }

  function delete_(ind){
    let newTasks = tasks.filter((ele, index)=> index!=ind);
    setTasks(newTasks);
  }

  return (
    <div>
      <form action="" className='m-3 border-amber-600 flex flex-col w-fit bg-[#7193ad] rounded-xl items-center px-2 py-1 '>
        <input id='task' type="text" placeholder='Enter Task' className ='py-0.5 px-3 bg-green-600 rounded-lg ' />
        <input onClick={(event)=>{
          event.preventDefault();
          addTask(document.querySelector("#task").value);
        }} type="submit" value="Add task" className='mt-2 w-20 bg-red-600 py-0.5 px-2 rounded-2xl font-semibold'/>
      </form>

      <div className='p-2 rounded-2xl   w-fit ml-2 flex flex-col '>
        <h1 className='font-bold'>Tasks ToDo</h1>
        {
          tasks.map((ele,ind)=>{
            return <div className='m-0.5 bg-[#a1bfd6] flex items-center px-2 py-1 justify-between min-w-40'>
              <h2 >{ele}</h2>
              <button className='bg-red-600 px-1 rounded ml-3' 
              onClick={()=>{
                delete_(ind)
              }}>delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
