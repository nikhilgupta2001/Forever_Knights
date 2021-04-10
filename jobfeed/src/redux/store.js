import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducer';
import getdatareducer from './reducer/getdatareducer'
const middleware=[thunk];

//[]-our reducers ,()-empty objects
//...-spread opertor 

const reducer=combineReducers({
  getAdds:getdatareducer,
  authReducer:rootReducer
})
const initalState={};

const store=createStore(
    reducer,initalState,
    compose(applyMiddleware(...middleware),
      //to see actions and state on  redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )); 
  
  export default store; 