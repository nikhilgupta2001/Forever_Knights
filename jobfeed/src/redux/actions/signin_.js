import axios from "axios";
import {GET_ERRORS,SET_CURRENT_USER} from "../constants";
import * as actionTypes from '../constants';
export const registeruser=(userData,history)=>dispatch=>{
    console.log(userData);

    axios.post('/signup',userData)
     .then(res=>history.push('/signin'))
    .catch(err=>
     dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    })
    );
};

export const loginUser=userData=>dispatch=>{
    console.log(userData);
    axios.post('/signin',userData)
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







