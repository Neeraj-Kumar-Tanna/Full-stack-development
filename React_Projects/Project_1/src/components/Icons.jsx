import React from 'react'
import "./dock.scss"

const Icons = ({link, onClick, title}) => {
  return (
    <img className='icon' src={link} alt="AppStore" title={title} onClick={onClick} />
  )
}

export default Icons
