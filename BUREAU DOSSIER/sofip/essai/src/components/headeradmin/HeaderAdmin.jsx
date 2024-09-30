import React from 'react'
import './headeradmin.css'
//image
import logo from '../../assets/images/logo.png'
import { useMediaQuery } from 'react-responsive'
import { SignOut } from '../signout/SignOut'
const HeaderAdmin = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })
  return (
    <header id={isBigScreen && "headerAdminBigScreen" || isTabletOrMobile && "headerAdminMobile"}>
        <img id={isBigScreen && "logoAdminBigScreen" || isTabletOrMobile && "logoAdminMobile"}src={logo}/>
        <SignOut/>
    </header>
  )
}

export default HeaderAdmin