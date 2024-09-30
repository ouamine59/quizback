import React from 'react'
import './booking.css'
import { useMediaQuery } from 'react-responsive'
import Drapeau from '../drapeau/Drapeau'
const Booking = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    
  return (
    <div id={ isBigScreen && 'containerBookingBigScreen' ||isTabletOrMobile && 'containerBookingBigScreen'}>
        <div id={ isBigScreen && 'bookingBigScreen' ||
                isTabletOrMobile && 'bookingMobile'}>
            <p id='booking'>Réservé en ligne</p>
            <Drapeau/>
            <p id='horaire'>
            Horaires : lundi-jeudi : <br/>
11h30 - 14h30 et 19h00-23h00 <br/>
vendredi-samedi : <br/>
11h30 - 14h30 et 19h00-20h00
            </p>
        </div>
        <div id={ isBigScreen && 'bookingImgBigScreen' ||
                isTabletOrMobile && 'bookingImgMobile'}></div>
    </div>
  )
}

export default Booking