import {GET_ADDS} from '../constants';

const initialState={
   adds:[],
   loading:true
}


export default function(state=initialState , action ){
    switch(action.type){
        case GET_ADDS:
            const item=action.payload.data;
            console.log(item);
                 return{
                    // ...state,
                    adds:[...state.adds,item],
                    loading:false
                 };
            //  }
        case action.REMOVE_FROM_CART:
            return{
                ...state,
                addItems:state.addItems.filter((x)=> x.product !==action.payload),
            };

        default:
            return state;
    }
}