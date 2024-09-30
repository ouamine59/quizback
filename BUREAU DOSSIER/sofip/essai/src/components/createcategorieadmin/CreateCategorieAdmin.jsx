import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useNavigate } from 'react-router-dom';
import BaseUrlApi from '../../assets/config/BaseUrlApi'
import {message} from '../../assets/redux/AlertSlice'
import { useDispatch } from 'react-redux';

import H1Admin from '../h1admin/H1Admin'
import Liens from '../liens/Liens'
import Input from '../input/Input'
import BtnSubmit from '../btnsubmit/BtnSubmit'
const CreateCategorieAdmin = () => {
    //mise en page du responsive
    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })
    //base url api
    const urlApi = BaseUrlApi();
    //navigation
    const navigate = useNavigate();
    //redux
    const dispatch = useDispatch();
    //recuperation du token
    const authHeader            = useAuthHeader();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      //enregistrement des données dans la bdd
    const onSubmit = async () =>{
      //recuperation de la categorie
      const categorie = document.getElementById('categorie').value ;
      //envoi des données à api
      await axios.get(urlApi+`/admin/categories/create/${categorie}`,{
        headers: {
          'Authorization': `${authHeader}` 
        }}
      ).then((e)=>{
        console.log(e)
        dispatch(
          message({
            display: true,
            message : 'Catégorie crée',
            type:'success'
          })         
        );
          navigate('/admin/categories');
      })
    }
  return (
    <>
    <section id={isBigScreen && "retourAndCreateBigScreen" ||isTabletOrMobile && "retourAndCreateBigScreen"}>
    <Liens 
      container={isBigScreen && 'containerReturnBigScreen' ||isTabletOrMobile && 'returnMobile'  }
      link={`/admin/tableau-de-bord`}
      classe='styleretour'
      message='Retour' 
    />
    </section>
    <section id={isBigScreen && 'sectionAdminBigScreen' ||
      isTabletOrMobile && 'sectionAdminMobile'  }></section>
     <article className={isBigScreen && 'articleAdminBigScreen' ||
      isTabletOrMobile && 'articleAdminMobile'  }>
    
        <H1Admin h1={isBigScreen && 'h1AdminBigScreen'|| isTabletOrMobile && 'h1AdminMobile'  } 
        container_h1={isBigScreen && 'ContainerH1BigScreen' ||
        isTabletOrMobile && 'ContainerH1Mobile'  }  
        titre='Créer une catégorie'
        /> 
        <div id={isBigScreen && 'divConnectionAdminBigScreen' ||
          isTabletOrMobile && 'divConnectionAdminMobile'  } >
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
        
        labelcss={isBigScreen && 'labelBigScreen' ||isTabletOrMobile && 'labelMobile'  } 
          
      /> 
        <BtnSubmit container_submit={isBigScreen && "containerBtnBigScreen" || 
          isTabletOrMobile && "containerBtnMobile"} 
          classe={isBigScreen && "successAdminMobile" || 
          isTabletOrMobile && 'successAdminMobile'} id='submit' value='CREER'/>
        
      </form>
      </div>
      </article>
    </>
  )
}

export default CreateCategorieAdmin