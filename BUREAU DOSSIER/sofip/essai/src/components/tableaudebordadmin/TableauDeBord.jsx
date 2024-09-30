import React from 'react'
import { useMediaQuery } from 'react-responsive'
import H1Admin from '../h1admin/H1Admin'
import Liens from '../liens/Liens'
import './tableaudebord.css'
const TableauDeBord = () => {
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })
  
  return (
    <>
    <section id={isBigScreen && "retourAndCreateBigScreen" ||isTabletOrMobile && "retourAndCreateBigScreen"}>

    </section>
    <section id={isBigScreen && 'sectionAdminBigScreen' ||
      isTabletOrMobile && 'sectionAdminMobile'  }></section>
     <article className={isBigScreen && 'articleAdminBigScreen' ||
      isTabletOrMobile && 'articleAdminMobile'  }>
    
    < H1Admin h1={isBigScreen && 'h1AdminBigScreen'|| isTabletOrMobile && 'h1AdminMobile'  } 
      container_h1={isBigScreen && 'ContainerH1BigScreen' ||
        isTabletOrMobile && 'ContainerH1Mobile'  }  
      titre='Tableau de bord'/> 
          <div id={isBigScreen && 'lienContBigScreen' ||isTabletOrMobile && 'lienContMobile'  }>
          <Liens 
            container={ isBigScreen && 'contLinkTabBigScreen'  ||isTabletOrMobile && 'contLinkTabMobile'  }
            classe={ isBigScreen && 'linktabBigScreen' ||isTabletOrMobile && 'linkTabMobile' } 
            link='/admin/categories'
            message={<div>Les catégories</div>} 
          />
          <Liens 
            container={ isBigScreen && 'contLinkTabBigScreen'  ||isTabletOrMobile && 'contLinkTabMobile'  }
            classe={ isBigScreen && 'linktabBigScreen' ||isTabletOrMobile && 'linkTabMobile' } 
            link='/admin/produits'
            message={<div>Les produits</div>} 
          />
          </div>
        </article>
    </>
  )
}

export default TableauDeBord