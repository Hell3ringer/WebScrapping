
import './App.css';
import {Switch,Route} from 'react-router-dom'
import WelcomePage from './Components/Welcome/WelcomePage';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Dashbord from './Components/Dashbord/Dashbord';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import LoginBootstrap from './Components/Login/LoginBootstrap';


function App() {
  return (
    <div>
     <Switch>
       <Route exact path = '/' component={WelcomePage} />
       
       <Route exact path = '/Login' component={LoginBootstrap} />
      {/*  <Route exact path = '/dashbord' component={Dashbord} /> */}
       <ProtectedRoute exact path='/dashbord' component={Dashbord} ></ProtectedRoute>
       
       <Route component={ErrorPage} />

     </Switch>
      
     
    </div>
  );
}

export default App;
