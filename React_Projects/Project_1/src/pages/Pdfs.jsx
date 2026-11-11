import React from 'react'
import MacTemplete from './MacTemplete'
import "./pdf.scss";

const Pdfs = (props) => {
  return (
    <MacTemplete>
        <embed src={props.link} type="" />
    </MacTemplete>
  )
}

export default Pdfs
