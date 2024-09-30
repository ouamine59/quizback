import React from 'react'
import './footer.css'
import footer from '../../assets/images/footer.jpg'
import LogoVisiteur from '../logovisiteur/LogoVisiteur'
import { useMediaQuery } from 'react-responsive'
import phone from '../../assets/images/phone.png'
import network from '../../assets/images/network.png'
const FooterMobile = () => {
  const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
  return (
    <footer id={ isBigScreen && 'containerFooterVisitorBigScreen' ||
      isTabletOrMobile && 'containerFooterMobile'}>
        <img id={ isBigScreen && 'imgVisitorFooterBigScreen' ||
      isTabletOrMobile && 'imgVisitorFooterMobile'}
       src={footer}/>
        <div id={ isBigScreen && 'footerLogoVisitorBigScreen' ||
            isTabletOrMobile && 'footerLogoVisitorMobile'}>
          <LogoVisiteur/>

        </div>
          <p id={ isBigScreen && 'footerParagraphVisitorBigScreen' ||
            isTabletOrMobile && 'footerParagraphVisitorMobile'}>lundi- jeudi :<br/>
          11h30-14h30 et 19h00-23h00</p>
       
          <p id={ isBigScreen && 'footerPhoneVisitorBigScreen' ||
            isTabletOrMobile && 'footerPhoneVisitorMobile'}>
              <img src={phone} />07.00.00.00.00
          </p>
          <div id={isBigScreen && "networkBigScreen" || isTabletOrMobile && "networkMobile"}>
            <img src={network}/>
          </div>
    </footer>
  )
}

export default FooterMobile