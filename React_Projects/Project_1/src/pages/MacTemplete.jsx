import React from 'react'
import {Rnd} from 'react-rnd'
import "./macTemplete.scss"

const MacTemplete = ({children}) => {
  return (
    <Rnd
      className="mac-template"
      default={{ x: 100, y: 100, width: 400, height: 300 }}
      minHeight={160}
      minWidth={300}
    //   enableResizing={{
    //     top: true,
    //     right: true,
    //     bottom: true,
    //     left: true,
    //     topRight: true,
    //     bottomRight: true,
    //     bottomLeft: true,
    //     topLeft: true,
    //   }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="right">neerajkumar.tanna</div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}


export default MacTemplete