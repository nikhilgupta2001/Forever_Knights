import {React} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import store from '../redux/store';
import Adds from '../components/Adds'
import Home from './homeComponent';
import SignUp from './SignupComponent';
import MoneyEarned from './Profile/MoneyEarned'
import EditProfile from './Profile/EditProfile'
import Stats from './Profile/Stats'
import Profile from './profileComponent'
import BankDetails from './Profile/BankDetails'
import CompanyStats from '../addscomponents/CompanyProfile/CompanyStats';
import CompanyUploadVideo from '../addscomponents/CompanyProfile/CompanyUploadVideo';
import ComapanyPayments from '../addscomponents/CompanyProfile/ComapanyPaymentsLogs';
import Companyprofile from '../addscomponents/companyprofile';
import PrivateRouting from '../Privaterouting';
var authToken = localStorage.getItem('jwtToken');


function Main(){
    return(
     
            <Router >
            
            <Route exact path='/'><SignUp/></Route>
            <Route exact path='/signup'><SignUp/></Route>
      
           {/* <Route exact path='/Profile'><Profile/></Route> */}
            <Switch>
            <PrivateRouting exact path="/home" component={Home} /> 
            </Switch>
           
            <Switch>
            <PrivateRouting  exact path='/profile' component={Profile}/>
            </Switch>
            <Switch>
            <Route exact path="/adds"><Adds/></Route> 
            </Switch>
             
            <Switch>
            <PrivateRouting  exact path="/stats" component={Stats}/>
            </Switch>
            
            <Switch>
            <PrivateRouting exact path="/moneyearned" component={MoneyEarned}/>
            </Switch>

            <Switch>
            <PrivateRouting exact path="/editProfile" component={EditProfile} />
            </Switch>
           

            <Switch>
            <PrivateRouting exact path="/bankdetails" component={BankDetails}/>
            </Switch>
            
            {/* COMPANY PROFILE */}

        
           <Switch>
            <PrivateRouting exact path="/getaddsfeatured" component={Companyprofile}/>
            </Switch>

            <Switch>
            <PrivateRouting exact path="/companyprofile" component={Companyprofile}/>
            </Switch>

            <Switch>
            <PrivateRouting exact path="/companystats" component={CompanyStats}/>
            </Switch>

            <Switch>
            <PrivateRouting  exact path="/companyuploadvideo" component={CompanyUploadVideo}/>
            </Switch>

            <Switch>
            <PrivateRouting exact path="/comapanypayments" component={ComapanyPayments}/>
            </Switch>

            <Switch>
            <PrivateRouting exact path="/editprofile" component={EditProfile} />
            </Switch>

            
            {/* <Redirect to="/"/> */}
        
        </Router>
        
    )
}
export default Main;
