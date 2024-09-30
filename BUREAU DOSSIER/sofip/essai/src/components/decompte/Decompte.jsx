import React,{useState, useEffect} from 'react'
import './decompte.css'
import H1Visiteur from '../h1visiteur/H1Visiteur'
import { useMediaQuery } from 'react-responsive'
const Decompte = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
      
    const [delai, setDelai]= useState()
    /**
     * 
     * 
     * @returns jour heure minute seconde
     */
    const decompte =()=>{
        const today = new Date();
        const fin   = new Date('2024-07-25');
        //recupere l'intervale entre les deux dates en secondes
        const tmp   = (fin - today)/1000
        //initialisation des variable
        let jour =0;
        let heures =0;
        let minutes=0 ;
        let secondes =0;
        if(tmp>= 0){
            const tempEnJour    = (tmp /(86400))
            //obtien le nombre de jours
            jour  = Math.trunc( tempEnJour)
            //recupere le temps restant en seconde
            let tempsRestant = (tmp-(jour*86400))
            // obtiens le temps qui reste des heures
            const tempsEnHeures =tempsRestant/3600
            heures = Math.trunc(tempsEnHeures)
            // recupere le temps restant en seconde apres les jours dt heures
            tempsRestant = (tmp-(jour*86400)-(heures*3600))
            const tempsEnMinutes = tempsRestant/60
            //calcul le temps restant des minutes
            minutes = Math.trunc(tempsEnMinutes)
            //le temps restant pour les secondes
            tempsRestant = (tmp-(jour*86400)-(heures*3600)-(minutes*60))
            secondes = Math.trunc(tempsRestant )
        }
        let response ;
        response = {'jour':jour,'heures':heures,'minutes':minutes,'secondes':secondes}
        return response
    }
    useEffect(()=>{
        setDelai(decompte())
        setInterval(delai,1000)
        
    },)
    
  return (
    <section>
        <article>
            <H1Visiteur title='Ouverture du site dans'/>
            <div id={isBigScreen && 'cont' || isTabletOrMobile && 'contMobile'}>
                <div className={isBigScreen && 'container' || isTabletOrMobile && 'containerMobile'}>
                    <div>{delai && delai.jour  } </div><div>JOURS</div>
                </div> 
                <div className={isBigScreen && 'container' || isTabletOrMobile && 'containerMobile'}>
                    <div>{delai && delai.heures  }</div><div> HEURES</div>
                </div> 
                <div className={isBigScreen && 'container' || isTabletOrMobile && 'containerMobile'}>
                     <div>{delai && delai.minutes  }</div><div> MINUTES</div>
                </div> 
                <div className={isBigScreen && 'container' || isTabletOrMobile && 'containerMobile'}>
                    <div>{delai && delai.secondes  } </div><div> SECONDES</div>
                </div> 

            </div>

        </article>
        <article>Venez découvrir notre restaurant</article>
    </section>
  )
}

export default Decompte