import React from 'react'

const Navbar = (props) => {
  return (
    <div className='bg-black text-white mb-2 py-1 px-13 flex flex-row items-center justify-between'>
      <div><h2>{props.name}</h2></div>
      <div className='flex flex-row gap-8'>
        {
          props.options.map(function(ele , ind){
            return <h2 key={ind}>{ele}</h2>
          })
        }
      </div>
    </div>
  )
}

export default Navbar