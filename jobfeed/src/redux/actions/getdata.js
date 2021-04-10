import axios from "axios";
import history from './history';
// import {history} from 'history';
import {GET_ERRORS,SET_CURRENT_USER,SIGNED_IN,GET_ADDS} from "../constants";
import * as actionTypes from '../constants';
import { Redirect } from "react-router-dom";


export const getalladds=()=>dispatch=>{
    // console.log(userData);
    console.log("HELLO");
    axios.post("http://localhost:5000/adds",{"interest":"song"})
    .then((res)=>{
        console.log(res);
        dispatch({
            type:GET_ADDS,
            payload:res
        })
    })
    .catch(err=>console.log(err))
    
};