import axios from "axios";
import history from './history';
// import {history} from 'history';
import {GET_ERRORS,SET_CURRENT_USER,SIGNED_IN,GET_ADDS} from "../constants";
import * as actionTypes from '../constants';
import { Redirect } from "react-router-dom";


export const getalladds=()=>dispatch=>{
    //const profile = useSelector
    // console.log(userData);
   
    var inter = localStorage.getItem('Interests');
    console.log(inter);
    if(inter==null)
    {
        history.push('/profile')
    }
    else
    {
    inter = inter.split(",")
    }
    console.log(inter)
    // inter.split(',')

    console.log("HELLO");
    axios.post("http://localhost:5000/adds",{"interest":inter})
    .then((res)=>{
        console.log(res);
        dispatch({
            type:GET_ADDS,
            payload:res
        })
    })
    .catch(err=>console.log(err))
    
};