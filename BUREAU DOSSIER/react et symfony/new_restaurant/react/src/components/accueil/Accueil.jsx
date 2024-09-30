import React from 'react'
import './accueil.css'
import { useMediaQuery } from 'react-responsive'
import LogoVisiteur from '../logovisiteur/LogoVisiteur'
import { NavLink } from 'react-router-dom'
import pizza from './../../assets/images/pizza.jpeg'
import Booking from '../booking/Booking'
import H1Visiteur from '../h1visiteur/H1Visiteur'
import piz from '../../assets/images/accueil-pizza.jpg'
import pasta from '../../assets/images/pasta.jpg'
import lasagna from '../../assets/images/lasagna.jpg'
import Liens1 from '../liens1/Liens1'
import Footer from '../footer/Footer'
const Accueil = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
  return (
    <div id= "booking-id">
        <header id={ isBigScreen && 'contHeaderVisitorBigScreen' ||
                isTabletOrMobile && 'contHeaderVisitorMobile'}>
        </header>
        <div 
            id= { isBigScreen && 'headerVisitorBigScreen' ||
                isTabletOrMobile && 'headerVisitorMobile'}
                >
                <div id={ isBigScreen && 'logoAndMenuBigScreen' ||
                        isTabletOrMobile && 'logoAndMenuMobile'}>
                    <LogoVisiteur/>
                    <nav>
                        <div>
                            <div>
                            <ul>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" 
                                href="#" role="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                <div className={ isBigScreen && 'menuVisitorBigScreen' ||
                                    isTabletOrMobile && 'menuVisitorMobile'}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
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
                </div>
            </div>
            <div id={ isBigScreen && 'carrouselBigScreen' ||
                isTabletOrMobile && 'carrouselMobile'}>
                <div id="carouselExample" className={ isBigScreen && ' carousel slide sizeImageCarrouselBigScreen' ||
                isTabletOrMobile && ' carousel slide  sizeImageCarrouselMobile'}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={pizza} className="d-block w-100" alt="..."/>
                        <div className={ isBigScreen && 'titreProductBigScreen' ||
                            isTabletOrMobile && 'titreProductMobile'}>
                                <div>L'italienne </div>
                                <div>15€</div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={pizza} className="d-block w-100" alt="..."/>
                        <div className={ isBigScreen && 'titreProductBigScreen' ||
                            isTabletOrMobile && 'titreProductMobile'}>
                                <div>L'italienne </div>
                                <div>15€</div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={pizza} className="d-block w-100" alt="..."/>
                        <div className={ isBigScreen && 'titreProductBigScreen' ||
                            isTabletOrMobile && 'titreProductMobile'}>
                                <div>L'italienne </div>
                                <div>15€</div>
                        </div>
                        
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <article id={ isBigScreen && 'welcomeBigScreen' ||
                isTabletOrMobile && 'welcomeMobile'}>
                    Bienvenue nous sommes  heureux  de vous accueillir sur notre nouveau site web
                </article>
            </div>
        
        <main>
            <div >
                <Booking/>
            </div>
            <H1Visiteur title='Le Menu'/>
            <div id={ isBigScreen && 'menuBigScreen' ||
                isTabletOrMobile && 'menuMobile'}>
                
                <Liens1 
                image={piz}
                titreLiens={ isBigScreen && 'titreLiensBigScreen'  ||
                    isTabletOrMobile && 'titreLiensMobile'  }
                img={ isBigScreen && 'sizeImgMenuBigScreen'  ||
                    isTabletOrMobile && ' sizeImgMenuMobile'  }
                container={ isBigScreen && 'containerMenuBigScreen'  ||
                isTabletOrMobile && ' containerMenuMobile'  }
                 classe={ isBigScreen && 'linkBigScreen' ||isTabletOrMobile && 'linkMobile' } 
                 link='/admin/categorie/ajouter'
                 message='PIZZA'
                /> 

                <Liens1 
                image={pasta}
                titreLiens={ isBigScreen && 'titreLiensBigScreen'  ||
                    isTabletOrMobile && 'titreLiensMobile'  }
                img={ isBigScreen && 'sizeImgMenuBigScreen'  ||
                    isTabletOrMobile && ' sizeImgMenuMobile'  }
                container={ isBigScreen && 'containerMenuBigScreen'  ||
                isTabletOrMobile && ' containerMenuMobile'  }
                 classe={ isBigScreen && 'linkBigScreen' ||isTabletOrMobile && 'linkMobile' } 
                 link='/admin/categorie/ajouter'
                 message='PASTA'
                />
                <Liens1 
                image={lasagna}
                titreLiens={ isBigScreen && 'titreLiensBigScreen'  ||
                    isTabletOrMobile && 'titreLiensMobile'  }
                img={ isBigScreen && 'sizeImgMenuBigScreen'  ||
                    isTabletOrMobile && ' sizeImgMenuMobile'  }
                container={ isBigScreen && 'containerMenuBigScreen'  ||
                isTabletOrMobile && ' containerMenuMobile'  }
                 classe={ isBigScreen && 'linkBigScreen' ||isTabletOrMobile && 'linkMobile' } 
                 link='/admin/categorie/ajouter'
                 message='LASAGNA'
                />
            </div>
        </main>
         <Footer/> 
    </div>
  )
}


export default Accueil