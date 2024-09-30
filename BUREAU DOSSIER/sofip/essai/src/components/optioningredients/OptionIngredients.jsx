import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './optioningredients.css'
const OptionIngredients = (props) => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
    const type = (props.type==='red')?"red":"green";
    if(type=='red'){
        return (
            <div className={isBigScreen && "optionIngredientRedBigScreen"  || 
                isTabletOrMobile && "optionIngredientRedMobile" }>
                    {props.name} - {props.priceOption}€
            </div>
          )
    }else{
        return (
            <div className={isBigScreen && "optionIngredientGreenBigScreen"  || 
                isTabletOrMobile && "optionIngredientGreenMobile"}>
                    {props.name} + {props.priceOption}€
            </div>
          )
    }
  
}

export default OptionIngredients