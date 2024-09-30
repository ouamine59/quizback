import React,{useState, useEffect} from 'react'
import './loginadmin.css'
import {useNavigate} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Input from '../input/Input'
import BtnSubmit from '../btnsubmit/BtnSubmit'
import {useForm} from 'react-hook-form';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import H1Admin from '../h1admin/H1Admin'
// import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import axios from 'axios'
import {  useDispatch } from 'react-redux'
import { message } from '../../assets/redux/AlertSlice'
import BaseUrlApi from'../../assets/config/BaseUrlApi'
const LoginAdmin = () => {
  //recupere url de api
  const urlApi = BaseUrlApi();
  const signIn = useSignIn();
  // const authUser = useAuthUser()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 280px)' })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const checkLogin = async (email, password)=>{
    await axios.post(urlApi+`/auth`,{
        email:email,
        password:password
    })
    .then((e)=>{ 

      signIn({
        auth: {
            token: e.data.token ,
            type: 'Bearer'
        },
         refresh: e.data.token,
          // userState: {
          //     name: name,
          //     uid: uuid
          // }
    })
      navigate("/admin/tableau-de-bord")
    } ).catch(function (error) {
      console.log(error);
      dispatch(
        message({
          display: true,
          message : 'Erreur dans la connexion',
          type:'error'
        })         
      );
    })
  }
  const [createUser, setCreateUser]=useState()
  const onSubmit = () =>{
    const email = document.getElementById('email').value ;
    const password = document.getElementById('password').value ;
    checkLogin(email,password)
  }
  const [findEmail, setFindEmail]= useState();
  const handleChangeEmail=()=>{
  //   const email = document.getElementById('email').value ;
  //   if(email==''){
  //     setFindEmail(0)
  //   }else{
  //     axios.get(`http://localhost:8000/user/email/${email}`,{
  //       headers: {
  //         'Authorization': `${authHeader}` 
  //       }
  // })
  //     .then((e)=>{
  //         setFindEmail(e.data.message)
          
  //     } ).catch(function (error) {
  //       console.log(error);
  //     })
  //   }
   
  }
  
  const handleChangePassword= ()=>{

  }
  return (
    <>
    <section id={isBigScreen && "retourAndCreateBigScreen"||isTabletOrMobile && "retourAndCreateBigScreen"}>

</section>
    <section id={isBigScreen && 'sectionAdminBigScreen' ||
        isTabletOrMobile && 'sectionAdminMobile'  }></section>
       <article className={isBigScreen && 'articleAdminBigScreen' ||
        isTabletOrMobile && 'articleAdminMobile'  }>
      
      < H1Admin h1={isBigScreen && 'h1AdminBigScreen'|| isTabletOrMobile && 'h1AdminMobile'  } 
        container_h1={isBigScreen && 'ContainerH1BigScreen' ||
          isTabletOrMobile && 'ContainerH1Mobile'  }  
        titre='Connection'/> 
        <div id={isBigScreen && 'divConnectionAdminBigScreen' ||
          isTabletOrMobile && 'divConnectionAdminMobile'  } >
        <form id='form' onSubmit={handleSubmit(onSubmit)} >
        <Input
        type="email"
        name="email"
        label="Email"
        errors={errors}
        
        register={register}
        validationSchema={{ 
          required: true,
          minLength:2,
          maxLength:255,
          
          pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
          message: 'Le format de email  est invalide.' },
                 
          onBlur:(e)=>{handleChangeEmail()},
        }}
        id='email'
        
        messRequired="L'email est obligatoire."
        messMinLength='Le minimum est 2 catactères.'
        messMaxLength='Le maximum est 255 caractères.'
        messPattern='Erreur dans lemail '
        container_input='container_mobile'
        required
        classe={isBigScreen && 'inputVisiteurMobile' ||isTabletOrMobile && 'inputVisiteurMobile'  } 
        
        labelcss={isBigScreen && 'labelBigScreen' ||isTabletOrMobile && 'labelMobile'  } 
          
      /> 
      {findEmail==2 && <p className='success-message'>L'e-mail disponible.</p>}
        <Input
        type="password"
        name="password"
        label="Mot de passe"
        errors={errors}
        classe={isBigScreen && 'inputVisiteurMobile' ||isTabletOrMobile && 'inputVisiteurMobile'  } 
        
        register={register}
        validationSchema={{ 
          required: true,
          minLength:8,
          maxLength:40, 
          pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#%$+=]).{8,40}$/ },  
          
          onChange:(e)=>{handleChangePassword()},
        }}
        id='password'
        
        messRequired='Le mot de passe est obligatoire.'
        messMinLength='Le minimum est 8 catactères.'
        messMaxLength='Le maximum est 40 caractères.'
        container_input='container_mobile'
        required
        messPattern ='Le format du mot de passe est injcorrect'
        labelcss={isBigScreen && 'labelAdminMobile' ||isTabletOrMobile && 'labelAdminMobile'  } 
          
      /> 
        <BtnSubmit container_submit={isBigScreen && "containerBtnBigScreen" || 
          isTabletOrMobile && "containerBtnMobile"} 
          classe={isBigScreen && "successAdminMobile" || 
          isTabletOrMobile && 'successAdminMobile'} id='submit' value='SE CONNECTER'/>
        
      </form>
    </div>
    </article>
  </>
  )
}

export default LoginAdmin