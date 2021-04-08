import axios from "axios";
import history from './history';

// import {history} from 'history';
import {GET_ERRORS,SET_CURRENT_USER,SIGNED_IN} from "../constants";
import * as actionTypes from '../constants';
import { Redirect } from "react-router-dom";
export const registeruser=(userData)=>dispatch=>{
    console.log(userData);
    axios.post('http://localhost:5000/signup',userData)
     .then(res=>
        {
            console.log(res)
            console.log(res.data)
        dispatch({
            type:SIGNED_IN,
            payload:res
        })
      })
    .catch(err=>
     dispatch({
        type:GET_ERRORS,
        payload:"",
    })
    );
};


export const loginUser=userData=>dispatch=>{
    console.log(userData);
    axios.post('http://localhost:5000/signin',userData)
     .then(res=>{

  const {token}=res.data;
  localStorage.setItem('jwtToken',token);
//    const decoded=jwt_decode(token);

   dispatch({
       type:SET_CURRENT_USER,
       payload:token
   });

    })
    .catch(err=> dispatch({
    type:GET_ERRORS,
    payload:err.response.data
}))
}







