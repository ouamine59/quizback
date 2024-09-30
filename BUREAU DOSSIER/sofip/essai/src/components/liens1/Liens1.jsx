import React from 'react'
import { NavLink } from 'react-router-dom'
import './Liens1.css'
import { useMediaQuery } from 'react-responsive'
const Liens1 = (props) => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
    return (
    <div className={props.container}>
        <img className={props.img} src={props.image}/>
        <NavLink 
        className={props.classe} 
        to={props.link}>
        
        </NavLink>
        <div className={props.titreLiens}>{props.message}</div>
    </div>

    )

}

export default Liens1