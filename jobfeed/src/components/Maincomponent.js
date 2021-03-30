import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import store from '../redux/store';

import Home from './homeComponent';
import SignUp from './SignupComponent';

function Main(){
    return(
      <Provider store={store}>
             <Router>
        <Switch>
            <Route exact path='/Home'><Home/></Route>
            <Route exact path='/Signup'><SignUp/></Route>
             
        
            {/* <Redirect to="/Home"/> */}
        </Switch>
        </Router>
        </Provider>
    )
}
export default Main;
