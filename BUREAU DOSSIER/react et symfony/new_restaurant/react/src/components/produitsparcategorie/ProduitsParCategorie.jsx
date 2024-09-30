import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from "react-router-dom";
import './produitsparcategorie.css'
const ProduitsParCategorie = (props) => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
  return (
       <div className={isBigScreen && 'displayProductsBigScreen' || isTabletOrMobile && 'displayProductsMobile'}>
        <img className={isBigScreen && "imgProductBigScreen" || isTabletOrMobile && "imgProductMobile"} src={props.image} />
        <div className={isBigScreen && "infoProductBigScreen" ||isTabletOrMobile && "infoProductMobile"}>
          <div className={isBigScreen && "titreAndPrixBigScreen" || isTabletOrMobile && "titreAndPrixMobile"}>
          
              <div className={isBigScreen && "titreBigScreen" ||isTabletOrMobile && "titreMobile"}>{props.titre}</div>
              <div className={isBigScreen && "prixBigScreen" || isTabletOrMobile && "prixMobile"}>{props.prix}€</div>
            
           
            </div>
             <NavLink to={props.link} ><div className={isBigScreen && "linkProductBigScreen" || isTabletOrMobile && "linkProductMobile"}>En savoir plus</div> </NavLink>
              
          
          </div>
      </div>
  )
}

export default ProduitsParCategorie