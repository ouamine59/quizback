import React, {useEffect} from 'react'
import Liens from '../liens/Liens'
import { useMediaQuery } from 'react-responsive'

const LogAccount = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })


        return (
          <div>
               <Liens 
                 // container={ isBigScreen && ''  ||isTabletOrMobile && ''  }
                  classe={ isBigScreen && 'moncompteAdminBigScreen' ||isTabletOrMobile && 'moncompteAdminMobile' } 
                  link='/admin/mon-compte'
                  message='Mon compte'
                />
          </div>
        

  
     

    
    
 )

    
 
 
    
    // Call this function to fetch protected data

  
}

export default LogAccount