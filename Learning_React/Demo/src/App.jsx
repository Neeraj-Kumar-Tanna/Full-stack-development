import React, { useState } from 'react'

const App = () => {
  function submitHandler(e){
    e.preventDefault();
    setUsers([...users , {name , number}]);
    setName('');
    setNumber('');
    console.log(users);
  }

  function modifyname(name){
    setName(name);
  }

  function modifyNumber(num){
    setNumber(num);
  }

  const [name , setName] = useState('');
  const [number , setNumber] = useState('');
  const [users , setUsers] = useState([]);

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
            users.map((ele)=>{
              return <li className='border border-[#E2E8F0]  bg-[#FFFFFF] w-30 m-1 p-1 rounded-lg'>
                <h3 className='text-[#0F172A]'>{ele['name']}</h3>
                <p className='text-[#64748B]'>{ele['number']}</p>

              </li>
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default App