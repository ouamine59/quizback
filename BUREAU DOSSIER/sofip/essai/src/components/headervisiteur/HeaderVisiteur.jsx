import React from 'react'
import { useMediaQuery } from 'react-responsive'
import LogoVisiteur from '../logovisiteur/LogoVisiteur'
import './headervisiteur.css'
import { NavLink } from 'react-router-dom'
import AlertMessage from '../alertmessage/AlertMessage'
const HeaderVisiteur = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
  
    
  return (
    <>
    <header id={isBigScreen && 'headerVisteurBigScreen' || isTabletOrMobile && 'headerVisiteurMobile'}>
    </header>
    <div id={isBigScreen && "containerHeaderBigScreen" ||isTabletOrMobile && "containerHeaderMobile"}>
      <AlertMessage/>
      <LogoVisiteur/>
      <nav>
        <div>
          <div>
            <ul>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" 
                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className={ isBigScreen && 'menuVisitorBigScreen' ||
                    isTabletOrMobile && 'menuVisitorMobile'}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>
                <ul class="dropdown-menu">
                    <li><NavLink to='/'><div className="dropdown-item">Accueil</div></NavLink></li>
                    <li><NavLink to='/categories'><div className="dropdown-item">Pizza</div></NavLink></li>
                    <li><NavLink to='/contact'><div className="dropdown-item">Contact</div></NavLink></li>
                    <li><NavLink to='/qui-sommes-nous'><div className="dropdown-item">Qui sommes-nous</div></NavLink></li>
                    <li><NavLink to='/decompte'><div className="dropdown-item">decompte</div></NavLink></li>
                
                
                </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
       
      <nav id='menu' >
        <div><NavLink to='/'><div className="dropdown-item">Accueil</div></NavLink></div>
        <div><NavLink to='/categories'><div className="dropdown-item">Pizzas</div></NavLink></div>
        
        <div><NavLink to='/contact'><div className="dropdown-item">Contact</div></NavLink></div>
        <div><NavLink to='/qui-sommes-nous'><div className="dropdown-item">Qui sommes-nous</div></NavLink></div>
        <div><NavLink to='/decompte'><div className="dropdown-item">decompte</div></NavLink></div>
                    
      </nav> 
      </div>   
   </> 
  )
}

export default HeaderVisiteur