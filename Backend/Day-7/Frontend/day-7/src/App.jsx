import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [students, setStudents] = useState([]);

  const getingData = ()=>{axios.get("http://localhost:3000/api/students")
    .then((response)=>{
      // console.log(response.data);
      // console.log(response.data.message);
      // console.log(response.data.data);

      setStudents(response.data.data);
    })
  }
  // getingData();

  useEffect(()=>{
    getingData();
  } , []);


  return (
    <div className="students">
      {
        students.map((student)=>{
          return <div className='student'>
        <h2>{student.name}</h2>
        <p>Age : {student.age}</p>
      </div>
        })
      }
      <div className='student'>
        <h2>Name</h2>
        <p>Age</p>
      </div>
    </div>
  )
}

export default App