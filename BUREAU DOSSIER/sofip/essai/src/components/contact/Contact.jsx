import React, { useState } from 'react'
import './contact.css'
import H1Visiteur from '../h1visiteur/H1Visiteur'
import Input from '../input/Input'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import Textarea from '../textarea/Textarea'
import BtnSubmit from '../btnsubmit/BtnSubmit'
import { useDispatch } from 'react-redux';
import { message } from '../../assets/redux/AlertSlice'
const Contact = () => {
  const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
  const dispatch              = useDispatch()//redux
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  /**
   * verifier si le textarea est rempli
   */
  //const [errorTextarea, setErrorTextarea]= useState()
  const checkTextarea =()=>{
    const submit    = document.getElementById('form')
    if( handleOnChange()){
      dispatch(
        message({
          display: true,
          message : 'Message envoyé',
          type:'success'
        })         
      );
    }else{
      submit.preventDefault()
    }
  }
  const handleOnChange =()=>{
    const errorTextarea     = document.getElementById('errorTextarea')
    const textarea  = document.getElementById('message').value
    const regex = new RegExp("^[a-zA-Z0-9-,. ]{10,}$");
    if(regex.test(textarea)){
        errorTextarea.innerHTML = ''
        return true ;
    }else{
      if(textarea.value ==''){
        errorTextarea.innerHTML = 'Le message est obligatoire.'
        return false ;
      }
      if(textarea.length <10){
        errorTextarea.innerHTML = 'Le message doit comporter au minimum 10 caractères.'
        return false ;
      }
      errorTextarea.innerHTML = 'Format du message non correct'
      return false ;
    }
   
  }
  const onSubmit =()=>{
    checkTextarea()
  }

  return (
    <section>
      <article>
        <H1Visiteur title='Nous contacter'/>
        <form id='form' onSubmit={handleSubmit(onSubmit)} >
        <Input
        keys='nom'
        type="text"
        name="nom"
        label="Nom"
        errors={errors}
        classe={isBigScreen && 'inputVisiteurBigScreen' ||isTabletOrMobile && 'inputVisiteurMobile'  } 
        register={register}
        validationSchema={{ 
          required: true,
          minLength:3,
          maxLength:50,
          //onChange:(e)=>{handleChange()},
          pattern:/^[a-zA-Z0-9- ]{3,50}$/
        }}
        id='objet'
        messRequired='Le nom est obligatoire.'
        messMinLength='Le minimum est 3 catactères.'
        messMaxLength='Le maximum est 50 caractères.'
        container_input={isBigScreen && 'containerVisiteurBigScreen' ||
          isTabletOrMobile && 'containerVisiteurMobile' } 
        messPattern='Le format du nom est incorrect.'
        required
        onchange={'handleChange'}
        value=''
        labelcss={isBigScreen && 'labelBigScreen' ||isTabletOrMobile && 'labelMobile'  } 
      /> 
      <Input
        keys='email'
        type="email"
        name="email"
        label="Email"
        errors={errors}
        classe={isBigScreen && 'inputVisiteurBigScreen' ||isTabletOrMobile && 'inputVisiteurMobile'  } 
        
        register={register}
        validationSchema={{ 
          required: true,
          minLength:2,
          maxLength:255,
          //onChange:(e)=>{handleChange()},
          pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/
        }}
        id='email'
        messRequired='L email est obligatoire.'
        messMinLength='Le minimum est 2 catactères.'
        messMaxLength='Le maximum est 255 caractères.'
        container_input={isBigScreen && 'containerVisiteurBigScreen' ||
          isTabletOrMobile && 'containerVisiteurMobile' } 
        messPattern='Le format du nom est incorrect.'
        required
        onchange={'handleChange'}
        value=''
        labelcss={isBigScreen && 'labelBigScreen' ||isTabletOrMobile && 'labelMobile'  } 
      /> 
       <Textarea
       cssLabel= {isBigScreen && 'labelTextareaBigScreen' ||isTabletOrMobile && 'labelMobile'  } 
        style={{width:'90%'} }
        minRows='10'
        label='Message*'
        id='message'
        minLength={10}
        // maxLength={300}
        onChange={handleOnChange}
        messMinLength='un minium de 10 caractères'
        // messMaxLength='un maximun de 300 caracteres'
        className={isBigScreen && 'textareaBigScreen' ||isTabletOrMobile && 'textareaMobile'  }/>
         <div id={isBigScreen && "errorTextareaBigScreen" ||
          isTabletOrMobile && "errorTextareaMobile"}>
            
            <p className='error' id='errorTextarea'></p>
         </div>
         <BtnSubmit 
         container_submit={isBigScreen && 'containerBtnBigScreen' ||isTabletOrMobile && "containerBtnMobile"    } 
         classe={isBigScreen && 'successBigScreen' ||isTabletOrMobile && 'successMobile'   } 
         click={checkTextarea}
         id='submit' 
         value='VALIDER'/>
        
        </form>
        
      </article>
    </section>
  )
}

export default Contact