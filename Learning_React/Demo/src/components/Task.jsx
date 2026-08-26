import React from 'react'
import {tasks} from '../App';


const Task = (props) => {
    console.log(tasks + "  hii");
    function display(){
        console.log("hii..");
        console.log(tasks[key_v]);
    }

  return (
    <div className='bg-pink-700 m-3 p-2 flex items-center w-fit'>
      <h2>{props.name}</h2>
      <button className='bg-red-600 p-1 rounded ml-3' 
      onClick={display}>Delete</button>
    </div>
  )
}

export default Task
