import React from 'react'
import './logovisiteur.css'
import logo from './../../assets/images/logo.png'
import { useMediaQuery } from 'react-responsive'
const LogoVisiteur = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
  return (
    <div id={ isBigScreen && 'containerLogoBigScreen' || isTabletOrMobile && 'containerLogoMobile' }>
       <img src={logo} className={ isBigScreen && 'logoBigScreen' || isTabletOrMobile && 'logoMobile' }/> 
    </div>
  )
}

export default LogoVisiteur