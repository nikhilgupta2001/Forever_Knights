import axios from "axios";
import history from './history';
// import {history} from 'history';
import {GET_PROFILE} from "../constants";
import * as actionTypes from '../constants';
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const getprofile=(userName)=>dispatch=>{
    
    console.log(userName,"in actions")
    axios.post("http://localhost:5000/profile/getprofile",{userName})
    .then((res)=>{
        console.log(res ,"13");
        dispatch({
            type:GET_PROFILE,
            payload:res
        })
        console.log(res, 'Line 18 getrofile');
        if(res.data==null)
        {
            history.push('/profile');
            // window.location.reload(true);
            toast.error("Please add your profile to procees");

        }
        else if(res.data.Interests != [])
        {
            console.log('Helllo');
           localStorage.setItem('Interests',res.data.Interests);
        }
        else
        {
            localStorage.setItem('Interests','');
        }
        // window.localStorage.setItem({Interests:res.data.Interests});
        // console.log(payload);
    })
    .catch(err=>console.log(err))
}