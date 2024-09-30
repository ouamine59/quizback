import React from 'react'
import H1Visiteur from '../h1visiteur/H1Visiteur'
import './aboutus.css'
import { useMediaQuery } from 'react-responsive'
const AboutUs = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
   
  return (
    <section>
      <article>
        <H1Visiteur title='Qui sommes-nous'/>
        <p className={isBigScreen && 'infoBigScreen' ||
        isTabletOrMobile && 'infoMobile'  } >
            OUAMS<br/>
1 Rue national<br/>
59200 - TOURCOING<br/>
07-00-00-00-00</p>
<p className={isBigScreen && 'infoBigScreen' ||
        isTabletOrMobile && 'infoMobile'  } 
        
        >sdccs <br/>sdcsdc sdcsd sdc sdkpdfoc <br/>nfidfvinf dfivivdfi idescription sdccs sdcsdc <br/>sdc</p>
      </article>
    </section>
  )
}

export default AboutUs