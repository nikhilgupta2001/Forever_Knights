import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './homeComponent';
import SignUp from './SignupComponent';

function Main(){
    return(
        <Switch>
            <Route exact path='/Home'><Home/></Route>
            <Route exact path='/Signup'><SignUp/></Route>
            {/* <Redirect to="/Home"/> */}
        </Switch>
    )
}
export default Main;
