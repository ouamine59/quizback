import React,{useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import Liens from '../liens/Liens'
import H1Admin from '../h1admin/H1Admin'
import BtnSubmit from '../btnsubmit/BtnSubmit'
import './listecategorieadmin.css'
import axios from 'axios'
import Modal from '../modal/Modal'
import BaseUrlApi from'../../assets/config/BaseUrlApi'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import Input from '../input/Input'
import { useForm } from 'react-hook-form'
import {message} from '../../assets/redux/AlertSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ListeCategorieAdmin = () => {
    const isBigScreen       = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile  = useMediaQuery({ query: '(min-width: 280px)' })
    const [listCategories, setListCategories]= useState()
    //base url api
    const urlApi                = BaseUrlApi(); 
     //recuperation du token
    const authHeader            = useAuthHeader();

     //navigation
     const navigate             = useNavigate();
     //redux
     const dispatch             = useDispatch();
     const [isOpen, setIsOpen]  = useState(false);
     const [nom, setNom]        =useState()
     const [idUpdate, setIdUpdate]= useState()
    const showCategorie =async ()=>{
        await axios.get(urlApi+`/categories/listing`,{
            headers: {
              'Authorization': `${authHeader}` 
            }})
        .then((e)=>{
            setListCategories(e.data.response)
            console.log(e.data)
          }).catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        showCategorie()
    },[])
//recuperation des données de la categorie
const detailCategory = async (e)=>{
  await axios.get(urlApi+`/categories/detail/${e}`)
  .then((e)=>{
    if(e.data.response==1){
      document.getElementById("form").reset();
      setNom(e.data.nom)
      setIdUpdate(e.data.id)
    }else{
      //redirection
    }
  }).catch((e)=>{
    console.log(e)
  })
}
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();
    const handleClose = (() => {
        setIsOpen(false);
    });

    const onSubmit = async () =>{
      const category  = document.getElementById('categorie').value ;
      await axios.get(urlApi+`/admin/categories/update/${idUpdate}/${category}`,{
        headers: {
          'Authorization': `${authHeader}` 
        }}
      )
      .then((e)=>{
        handleClose()
        showCategorie()
        dispatch(
          message({
            display: true,
            message : 'Catégorie Modifié',
            type:'success'
          }));
        navigate('/admin/categories');
      })
    }
    const handleClick = ((e) => {
      setIsOpen(true);
      detailCategory(e.target.value)    
    });
    const offCategory = (async(e)=>{
      await axios.get(urlApi+`/admin/categorie/delete/${e}`, {
        headers:{
          'Authorization':`${authHeader}`
        }
      }).
      then((e)=>{
        showCategorie()
        dispatch(
          message({
            display: true,
            message : 'Catégorie Modifié',
            type:'success'
          }));
        navigate('/admin/categories');

      })
    })
    const handleClickDelete = ((e)=>{
      offCategory(e.target.value)
    })
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
        <article className={isBigScreen && 'articleAdminBigScreen' ||
          isTabletOrMobile && 'articleAdminMobile'  }>
          < H1Admin h1={isBigScreen && 'h1AdminBigScreen'|| isTabletOrMobile && 'h1AdminMobile'  } 
            container_h1={isBigScreen && 'ContainerH1BigScreen' ||
            isTabletOrMobile && 'ContainerH1Mobile'  }  
            titre='les catégories'/>
          <div className={isBigScreen && "containerTableauBigScreen" || isTabletOrMobile && "containerTableauMobile"} >
            {listCategories && listCategories.map((c) => (
              <div className={isBigScreen && "rowArrayBigScreen" || isTabletOrMobile && "rowArrayMobile" }key={c.id}>
                  <div className="aa">
                    <div className={isBigScreen && 'test' }> {c.id}</div>
                    <div className='nameCategory'>{c.nom} </div> 
                </div>
                 
                  <button
                      type="button"
                      onClick={handleClick}
                      className='btn btn-success idCategory'
                      value={c.id}
                      
                  >
                    MODIFIER
                  </button>
                  
                <button onClick={handleClickDelete} className='btn-delete' value={c.id}>X</button>
              </div>
  
            ))|| <p>il n'y a pas de catégorie</p>}
             <Modal 
                isOpen={isOpen} 
                handleClose={handleClose}
              >
   
              <form id='form' onSubmit={handleSubmit(onSubmit)} >
                <Input
                  type="text"
                  name="categorie"
                  label="Catégorie"
                  errors={errors}
                  register={register}
                  validationSchema={{ 
                    required: true,
                    minLength:2,
                    maxLength:50,
                    pattern: { value: /^[A-Za-z 0-9]{2,50}$/, 
                    message: 'Le format de la catégorie  est invalide.' },    
                      //onBlur:(e)=>{handleChangeEmail()},
                    }}
                  id='categorie'
                  messRequired="La catégorie est obligatoire."
                  messMinLength='Le minimum est 2 catactères.'
                  messMaxLength='Le maximum est 50 caractères.'
                  messPattern='Erreur dans la catégorie '
                  container_input='container_mobile'
                  required
                  classe={isBigScreen && 'inputVisiteurMobile' ||isTabletOrMobile && 'inputVisiteurMobile'  } 
                  value={nom }
                  labelcss={isBigScreen && 'labelBigScreen' ||isTabletOrMobile && 'labelMobile'  }   /> 
                <BtnSubmit container_submit={isBigScreen && "containerBtnBigScreen" || 
                  isTabletOrMobile && "containerBtnMobile"} 
                  classe={isBigScreen && "successAdminMobile" || 
                  isTabletOrMobile && 'successAdminMobile'} id='submit' value='MODIFIER'/>
              </form>    
            </Modal>
          </div>
        </article>
      </>
    )
}

export default ListeCategorieAdmin