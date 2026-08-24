import React from 'react'

const Card = (props) => {
    console.log(props.id);
    function eligible(){
        props.age >= 18 ? document.getElementById(props.id).style.background = "green" : document.getElementById(props.id).style.background = "red";
        // if(props.age >= 18){
        //     document.getElementById(props.id).style.background = "green";
        // }
        // else{
        //     document.getElementById(props.id).style.background = "red";
        // }
    }
  return (
    <div id={props.id} className='flex flex-col py-3 px-5 bg-amber-50 w-30 justify-between items-center'>
      <img src={props.img} alt="image" className='h-10 w-10 rounded-[50%] '/>
      <h4 className='text-[8px] mt-1 font-semibold'>{props.name}</h4>
      <p className='text-[8px] mt-1'>{props.gender}</p>
      <button onClick={eligible} className='bg-red-600  rounded scale-95 px-1 mt-1 text-sm'>check</button>
    </div>
  )
}

export default Card