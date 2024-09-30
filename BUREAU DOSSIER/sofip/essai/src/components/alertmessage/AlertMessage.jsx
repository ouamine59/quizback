import React, {useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {useDispatch, useSelector } from 'react-redux';


import {message} from '../../assets/redux/AlertSlice'
const AlertMessage = () => {
  const dispatch = useDispatch();
  const mess = useSelector((state)=>state.message);
  let notify ;
  if(mess.display===true){
    switch(mess.type){
      case 'success':
        notify =  toast.success(mess.message);
      break ;
      case 'delete':
        notify =  toast.error(mess.message);
      break ;
      case 'error':
        notify =  toast.error(mess.message);
      break ;
    }
    dispatch(
      message({
        display: false,
        message : '',
        type:''
      })         
    );
  }

      

    return (
      <div>
        {notify}
        <Toaster/>
      </div>
    )

 
}

export default AlertMessage