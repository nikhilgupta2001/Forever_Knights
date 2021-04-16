import axios from "axios";
import history from './history';
// import {history} from 'history';
import {GET_PROFILE} from "../constants";
import * as actionTypes from '../constants';
import { Redirect } from "react-router-dom";

export const getprofile=(userName)=>dispatch=>{
    console.log(userName,"in actions")
    axios.post("http://localhost:5000/profile/getprofile",{userName})
    .then((res)=>{
        console.log(res);
        dispatch({
            type:GET_PROFILE,
            payload:res
        })
        // console.log(payload);
    })
    .catch(err=>console.log(err))
}