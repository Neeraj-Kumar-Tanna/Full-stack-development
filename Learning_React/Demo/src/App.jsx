import React, { useState } from 'react'

const App = () => {

  let [users , setUsers] = useState(JSON.parse(localStorage.getItem("usersData")));
  const [name , setName] = useState('');
  const [number , setNumber] = useState('');

  
  function submitHandler(e){
    e.preventDefault();
    let temp = users;
    temp.push({name , number})
    // setUsers([...users , {name , number}]);
    setUsers(users , temp);
    localStorage.setItem('usersData' , JSON.stringify(temp));

    setName('');
    setNumber('');
  }

  function modifyname(name){
    setName(name);
  }

  function modifyNumber(num){
    setNumber(num);
  }

  function deleteUser(ind){
    // let newUs = users.filter((ele , indx)=> ind!=indx);
    // setUsers(newUs);
    console.log(ind);
    let temp = [...users];
    temp.splice(ind,1);
    setUsers(temp);
    localStorage.setItem("usersData" , JSON.stringify(temp));
  }
  

  return (
    <div>
      <form className='border border-slate-400 p-1 m-2 flex flex-col w-fit gap-2 bg-[#FFFFFF] '
      onSubmit={(e)=>{
        submitHandler(e);
      }} >

        <input type="text" 
        placeholder='Enter Name'
        required
        className='bg-[#F8FAFC] text-[#1E293B] border border-[#CBD5E1] ' 
        value={name}
        onChange={(e)=>{
          modifyname(e.target.value);
        }}
        />

        <input type="number"  placeholder='Phone number'
        required
        className='bg-[#F8FAFC] text-[#1E293B] border border-[#CBD5E1] '
        value={number}
        onChange={(e)=>{
          modifyNumber(e.target.value);
        }}
        />

        <input type="submit" value="Add"
        className='bg-[#2563EB] text-[#FFFFFF] rounded-2xl' 
        
        />
      </form>

      <div className='p-2 m-2 border border-[#E2E8F0] '>
        <h1 className='font-semibold text-[#1E293B] '>contacts</h1>
        <ol className='border-[#E2E8F0] p-2 '>
          {
            users.map((ele , ind)=>{
              return <li className='border border-[#E2E8F0]  bg-[#FFFFFF] w-30 m-1 p-1 rounded-lg' >
                <h3 className='text-[#0F172A]' >{ele['name']}</h3>
                <p className='text-[#64748B]'  >{ele['number']}</p>
                <button
                className='p-1 bg-blue-600 text-white m-1'
                onClick={()=>{
                  deleteUser(ind);
                }}
                >Delete</button>
              </li>
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default App