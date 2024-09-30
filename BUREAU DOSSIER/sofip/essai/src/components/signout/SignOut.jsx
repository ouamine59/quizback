import React from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useNavigate } from 'react-router-dom';
import LogAccount from '../logaccount/LogAccount'
import { useMediaQuery } from 'react-responsive'
import './signout.css'
export const SignOut = () => {

    const signOut = useSignOut()
    const navigate = useNavigate()
    const auth = useAuthUser()
    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })

    if(auth ){
       return (
        <>
        <div className={ isBigScreen && 'accountBigScreen'  ||isTabletOrMobile && 'accountMobile'  }>
        <LogAccount/>
      <div id='btn-signout' onClick={() => {
        signOut();
        navigate('/admin/login')
      }}>X</div></div>
      </>
    )
    }
   
}




