import React from 'react'
import Icons from './Icons'
import "./dock.scss"

const Main = () => {
  return (
    <div className='dock'>
      <Icons link={"https://cdn-icons-png.flaticon.com/128/5977/5977575.png"}/>
      <Icons link={"https://cdn-icons-png.flaticon.com/128/15707/15707749.png"} />
      <Icons link={"https://cdn-icons-png.flaticon.com/128/15707/15707814.png"} />
      <Icons link={"https://cdn-icons-png.flaticon.com/128/831/831266.png"} />
      <Icons link={"https://cdn-icons-png.flaticon.com/128/2504/2504943.png"} />
      <Icons link={"https://cdn-icons-png.flaticon.com/128/15707/15707737.png"} />
    </div>
  )
}

export default Main
