import {GET_PROFILE}  from '../constants';
const initialState={
    profile:{},
    loading:true

}
export default function(state=initialState , action ){
    console.log(action.payload);
    switch(action.type){
        
        case GET_PROFILE:
            return{
                ...state,
                profile:action.payload,
                loading : false
            }
      
            default:
                return state; 
    }
}