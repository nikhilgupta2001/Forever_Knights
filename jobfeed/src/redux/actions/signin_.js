import axios from "axios";
import history from './history';
// import {history} from 'history';
import { GET_ERRORS, SET_CURRENT_USER, SIGNED_IN } from "../constants";
import * as actionTypes from '../constants';
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const registeruser = (userData) => {
    return dispatch => {
        console.log(userData);
        axios.post('http://localhost:5000/signup', userData)
            .then(response => {
                console.log(response)
                // localStorage.setItem('token', JSON.stringify(response));

                dispatch({
                    type: SIGNED_IN,
                    payload: response
                })
                history.push('/home');
                //    window.location.reload(true);
            })
            .catch(err => {
                toast.error(err);
            });
    }
};


export const loginUser = userData => {
    return dispatch => {
        // console.log(userData);
        axios.post('http://localhost:5000/signin', userData)
            .then(res => {

                const email = res.data.response.Email;
                const imageurl = res.data.response.ImageUrl;
                const Interests = res.data.response.Interests;
                const userName = res.data.response.userName;
                console.log(res);

                const token = res.data.token;
                const usertype = res.data.usertype
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('email', email);
                localStorage.setItem('imageurl', imageurl);
                localStorage.setItem('Interests', Interests);
                localStorage.setItem('userName', userName)
                localStorage.setItem('usertype', usertype)
                //[object object] error ask siddesh bhau
                // history.push('/home');
                // window.location.reload(true);
                dispatch({
                    type: SIGNED_IN,
                    payload: token
                });
            })
            .catch(err => toast("problem in login")
            )
    }
}