import React,{useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import Liens from '../liens/Liens'
import H1Admin from '../h1admin/H1Admin'
import './listproductsadmin.css'
import axios from 'axios'
import Modal from '../modal/Modal'
import BaseUrlApi from'../../assets/config/BaseUrlApi'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
const ListProductsAdmin = () => {
    const isBigScreen       = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile  = useMediaQuery({ query: '(min-width: 280px)' })
    const [listCategories, setListCategories]= useState()
    //base url api
    const urlApi                = BaseUrlApi(); 
     //recuperation du token
    const authHeader            = useAuthHeader();
    const showProduct =async ()=>{
        await axios.get(urlApi+`/products/listing`)
        .then((e)=>{
            setListCategories(e.data.response)
            console.log(e.data)
          }).catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        showProduct()
    },[])


    const [isOpen, setIsOpen] = useState(false);
    const handleClose = (() => {
        setIsOpen(false);
    });

    const handleClick = (() => {
        setIsOpen(true);
    });

  return (
    <>
    <section id={isBigScreen && "retourAndCreateBigScreen"
    || isTabletOrMobile && "retourAndCreateBigScreen"
    }>
        <Liens 
            container={isBigScreen && 'containerReturnBigScreen' ||
            isTabletOrMobile && 'containerReturnBigScreen'  }
            link={`/admin/tableau-de-bord`}
            classe='styleretour'
            message='Retour' 
        />
        <Liens 
            container={isBigScreen && 'containerCreateAdminBigScreen' ||
            isTabletOrMobile && 'containerCreateAdminBigScreen'  }
            link={`/admin/categories/ajouter`}
            classe='linkCreateBigScreen'
            message={<div> AJOUTER <div id='btn-create'><div>+</div></div></div>} 
        />
    </section>
    <section id={isBigScreen && 'sectionAdminBigScreen' ||
        isTabletOrMobile && 'sectionAdminMobile'  }></section>
      <article className={isBigScreen && 'articleAdminBigScreen' ||
        isTabletOrMobile && 'articleAdminMobile'  }>
        < H1Admin h1={isBigScreen && 'h1AdminBigScreen'|| isTabletOrMobile && 'h1AdminMobile'  } 
          container_h1={isBigScreen && 'ContainerH1BigScreen' ||
          isTabletOrMobile && 'ContainerH1Mobile'  }  
          titre='les produits'/>
        <div className={isBigScreen && "containerTableauBigScreen" || isTabletOrMobile && "containerTableauMobile"} >
          {listCategories && listCategories.map((c) => (
            <div className={isBigScreen && "rowArrayBigScreen" || isTabletOrMobile && "rowArrayMobile" }key={c.id}>
                <div className="aa">
                  <div className={isBigScreen && 'test' }> {c.id}</div>
                  <div className='nameCategory'>{c.nom} </div> 
              </div>
                <Modal 
                  isOpen={isOpen} 
                  handleClose={handleClose}
                >
                {/* Le contenu de la modale */}
               hgnfn
                </Modal>
                <button
                    type="button"
                    onClick={handleClick}
                    className='btn btn-success' 
                >
                  MODIFIER
                </button>
           
              <div className='btn-delete'>X</div>
            </div>
            
          ))|| <p>il n'y a pas de catégorie</p>}
        </div>
      </article>
    </>
  )
}

export default ListProductsAdmin