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
            <Switch>
            <Route exact path='/'><SignUp/></Route>
            <Route exact path='/Signup'><SignUp/></Route>
      
           <Route exact path='/Profile'><Profile/></Route>
            {/* <PrivateRouting exact path="/home"> 
            <Route path="/home/" component={Home} />
            </PrivateRouting> */}
            <Route exact path="/home"><Home /></Route>
            <Route exact path='/Profile'><Profile/></Route>
            <Route exact path="/Adds"><Adds/></Route>    
            <Route exact path="/Stats"><Stats /></Route>
            <Route exact path="/MoneyEarned"><MoneyEarned /></Route>
            <Route exact path="/EditProfile"><EditProfile /></Route>
            <Route exact path="/BankDetails"><BankDetails /></Route>
            {/* COMPANY PROFILE */}
            <Route exact path="/getaddsfeatured"><Companyprofile /></Route>
            <Route exact path="/Companyprofile"><Companyprofile/></Route>
            <Route exact path="/CompanyStats"><CompanyStats /></Route>
            <Route exact path="/CompanyUploadVideo"><CompanyUploadVideo/></Route>
            <Route exact path="/ComapanyPayments"><ComapanyPayments/></Route>
            {/* <Redirect to="/"/> */}
        </Switch>
        </Router>
        
    )
}
export default Main;
