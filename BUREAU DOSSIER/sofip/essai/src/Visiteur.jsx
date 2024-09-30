import react,{ useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './visiteur.css'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { Provider } from 'react-redux';
import store from './assets/redux/Store';
import { useMediaQuery } from 'react-responsive'
import refresh from './assets/auth/refresh'
import HeaderVisiteur from  './components/headervisiteur/HeaderVisiteur';
import Footer from './components/footer/Footer';
function Visiteur() {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })
  const storeauth = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
    refresh: refresh
  });
 
  return (
    <>

    
      <Provider store={store } >
    <AuthProvider store={storeauth}>
        <HeaderVisiteur/>
        <main 
        // id={ isBigScreen && 'mainBigScreen' ||
        // isTabletOrMobile && 'mainMobile' } 
        >
          
          <Outlet/> 
        </main>
        <Footer/>
        </AuthProvider>
       </Provider>
      
      
    </>
  )
}

export default Visiteur

