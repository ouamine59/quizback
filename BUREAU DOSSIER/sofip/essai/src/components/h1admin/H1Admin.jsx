import React from 'react'
import './h1admin.css'
const H1Admin = (props) => {
  return (
    <div id={props.container_h1}>
        <h1 id={props.h1}> {props.titre}</h1> 
    </div>
  )
}

export default H1Admin