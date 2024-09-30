import React from 'react'
import { NavLink } from 'react-router-dom'
import './liens.css'
const Liens = (props) => {
    return (
    <div className={props.container}>
        
    <NavLink 
      className={props.classe} 
      to={props.link}>
       {props.message}
    </NavLink>
</div>

    )

}

export default Liens