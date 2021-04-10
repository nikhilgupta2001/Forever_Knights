import {SET_CURRENT_USER,SIGNED_IN}  from '../constants';
const initialState={
    isAuthenticated:false,
    signed_in:false,
    user:{},
}

export default function (state=initialState,action){
    console.log(action.payload)
    switch (action.type){
    
        case SIGNED_IN:
            return {
                ...state,
                isAuthenticated:true,
                signed_in:true,
                user:action.payload
            }
 
       default:
           return state;
        }
}
