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
      <form action="" className='mt-3 ml-3 border-amber-600 flex flex-col w-fit '>
        <input id='task' type="text" placeholder='Enter Task' className ='py-0.5 px-3 bg-green-600 mr-5 rounded-lg ' />
        <input onClick={(event)=>{
          event.preventDefault();
          addTask(document.querySelector("#task").value);
        }} type="submit" value="Add task" className='mt-2 mb-2 w-20 bg-red-600 py-0.5 px-2 rounded-2xl font-semibold'/>
      </form>

      <div className='p-2 rounded-2xl text-white bg-[#3b2726] w-fit ml-2 flex flex-col items-center'>
        <h1>Tasks ToDo</h1>
        {
          tasks.map((ele,ind)=>{
            return <div className='m-2 bg-[#246291] flex items-center px-2 py-1 justify-between '>
              <h2 >{ele}</h2>
              <button className='bg-red-600 px-1 rounded ml-3' 
              onClick={()=>{
                delete_(ind)
              }}>Delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
