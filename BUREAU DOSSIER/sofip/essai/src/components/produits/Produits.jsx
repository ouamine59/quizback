import React from 'react'
import './produits.css'
import H1visiteur from '../h1visiteur/H1Visiteur'
import ProduitsParCategorie from '../produitsparcategorie/ProduitsParCategorie'
import { useMediaQuery } from 'react-responsive'
//les images
import Magerita from '../../assets/images/magerita.jpg'
const Produits = () => {
  const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
  return (
    <section>
        <article>
            <H1visiteur title="Pizzas"/>
            <div id={isBigScreen && 'containerProductsBigScreen' || isTabletOrMobile && 'containerProductsMobile'}>
   

            <ProduitsParCategorie  
              link='/detail-produit/' 
              titre='Magherrita' 
              prix='20' 
              image={Magerita}/>
            <ProduitsParCategorie  
              link='/detail-produit/' 
              titre='Magherrita' 
              prix='20' 
              image={Magerita}/>
            <ProduitsParCategorie  
              link='/detail-produit/' 
              titre='Magherrita' 
              prix='20' 
              image={Magerita}/>
            <ProduitsParCategorie  
              link='/detail-produit/' 
              titre='Magherrita' 
              prix='20' 
              image={Magerita}/>
          </div>
        </article>
    </section>
  )
}

export default Produits