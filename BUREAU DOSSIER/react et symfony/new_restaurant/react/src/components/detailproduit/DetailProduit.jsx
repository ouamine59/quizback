import React from 'react'
import './detailproduit.css'
import { useMediaQuery } from 'react-responsive'
import H1Visiteur from '../h1visiteur/H1Visiteur'
import OptionIngredients from '../optioningredients/OptionIngredients'
//images
import pizza from '../../assets/images/magerita.jpg'

const DetailProduit = () => {
    const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
      
  return (
    <section>
        <article>
            <H1Visiteur title='Magheritta'/>
            <div id={isBigScreen && "containerDetailProduitBigScreen" || 
                isTabletOrMobile && "containerDetailProduitMobile"}>
                <div id={isBigScreen && "prixDetailProduitBigScreen" || 
                    isTabletOrMobile && "prixDetailProduitMobile"}>
                    <div>20€</div>
                </div>
                <img id={isBigScreen && "imgDetailProduitBigScreen" || isTabletOrMobile && "imgDetailProduitMobile"} src={pizza}/>
            </div>
            <div id={isBigScreen && "descriptionDetailProduitBigScreen" || 
                    isTabletOrMobile && "descriptionDetailProduitMobile"}>
                    <div>Description</div>
                    
                    <p>description dscscsdc dfc ds zefzefzef zeefzf szfezfe zefzez effz efzzf zez zefzefz zefzez zefzefz zefezf ze
                    description dscscsdc dfc ds zefzefzef zeefzf szfezfe zefzez effz efzzf zez zefzefz zefzez zefzefz zefezf ze
                    description dscscsdc dfc ds zefzefzef zeefzf szfezfe zefzez effz efzzf zez zefzefz zefzez zefzefz zefezf ze
                    description dscscsdc dfc ds zefzefzef zeefzf szfezfe zefzez effz efzzf zez zefzefz zefzez zefzefz zefezf ze</p>
        </div>
        <div id={isBigScreen && "positionOptionBigScreen"}>

        <div className={isBigScreen && 'optionBigScreen'}>
            <p className={isBigScreen && 'paraDetailProductBigScreen' 
                || isTabletOrMobile && 'paraDetailProductMobile'}>
                    
            
            Voici les ingrédients que vous pouvez enlevé :</p>
                <div className={isBigScreen && "containerOptionBigScreen" || isTabletOrMobile && "containerOptionMobile"}>
                    <OptionIngredients name='tomate'type='red' priceOption='0'/>
                    <OptionIngredients name='oignon'type='red' priceOption='0'/>
                    <OptionIngredients name='salade'type='red' priceOption='1'/>
                </div>
        </div>
        <div className={isBigScreen && 'optionBigScreen'}>
                <p className=
            {isBigScreen && 'paraDetailProductBigScreen' || isTabletOrMobile && 'paraDetailProductMobile'}>
             Voici les ingrédients que vous pouvez ajouter :</p>
                <div className={isBigScreen && "containerOptionBigScreen" || isTabletOrMobile && "containerOptionMobile"}>
                    <OptionIngredients name='tomate'type='green' priceOption='0'/>
                    <OptionIngredients name='boisson'type='green' priceOption='0'/>
                </div>
        </div>
        </div>
        </article>
    </section>
  )
}

export default DetailProduit