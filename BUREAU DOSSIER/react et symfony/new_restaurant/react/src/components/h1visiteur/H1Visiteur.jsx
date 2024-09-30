import React from 'react'
import Drapeau from '../drapeau/Drapeau'
import './h1visiteur.css'
import { useMediaQuery } from 'react-responsive'
const H1Visiteur = (props) => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
  return (
    <div id={ isBigScreen && 'containerH1BigScreen' ||
        isTabletOrMobile && 'containerH1Mobile'} >
        <div> <h1>{props.title}</h1>
          <Drapeau/>
        </div>
        
       
    </div>
  )
}

export default H1Visiteur