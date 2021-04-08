import {SET_CURRENT_USER,SIGNED_IN}  from '../constants';
const initialState={
    isAuthenticated:false,
    signed_in:false,
    user:{}
}



export default function (state=initialState,action){

    switch (action.type){
        // case SET_CURRENT_USER:
        //     return {
        //         ...state,
        //         isAuthenticated:true,
        //         signed_in:false,
        //         user:action.payload
        //     }
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
