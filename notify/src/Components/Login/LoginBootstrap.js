import React, { Component } from 'react'

import axios from 'axios'
import heroku from '../variable'
import GoogleLogin from 'react-google-login';


import {Alert,Toast,ToastBody,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const bootstrap = require('bootstrap')


const loginSuccess = () => {
    toast.success(" ✅ Login Successfull",{
    autoClose:2000,
    onClose:() => window.location.replace('/dashbord')

})  
}

const registrationSuccess = () => toast.info(" 👍 Sucessfully registered",{
    autoClose:2000
});
const errorLogin = () => toast(" ❌Error from server,please try again",{
    autoClose:4000
});


export class LoginBootstrap extends Component {
   
    state = {
        open : false,
        snackbarMessage:'',
        severity:''
    }

   
    responseSuccessGoogle = (response) => {
        //console.log(response);
        const token = {tokenId : response.tokenId}
        axios.post(`${heroku.baseURL}login`,token)
        .then((response) => {
            if (response.status == 201) {
                
                console.log("logged in --------------------");                
                document.cookie = `loginToken=${response.data}`
                
                this.setState({open:true,snackbarMessage:"login successfull",severity:'success'})
                loginSuccess();
            //window.location.replace('/dashbord')
            }else if (response.status == 200) {
                console.log("new user registered ------------------");
                this.setState({open:true,snackbarMessage:"successfully registered",severity:'success'})
                registrationSuccess()
            }else{
                console.log("err " + response);
                this.setState({open:true,snackbarMessage:"An error has occured",severity:'error'})
                errorLogin()
            }
            //console.log("response from responseGoogle " + JSON.stringify(response,null,2));
        })
    }
    responseFailureGoogle = (response) => {
        console.log(response);
        axios.post(`${heroku.baseURL}login`,response.tokenId)
        .then((response) => {
            console.log("response from responseGoogle " + response);
            errorLogin()
        })
    }

    render() {
        var myAlert = document.getElementById('myAlert')
        return (
            <div>
                
                
                <ToastContainer />     
                
                <div className="container -md">
                    <div className="card" id="loginCard">
                    <div className="col"><h1 className='card-title'>Login</h1></div>
                    <div className="col">
                    
                        <GoogleLogin
                            clientId="337693724676-nh17c3ruc08dbqb646vs8hobl5oq2n1i.apps.googleusercontent.com"
                            buttonText="Sign in with google"
                            theme='dark'                
                                      
                            onSuccess={this.responseSuccessGoogle}
                            onFailure={this.responseFailureGoogle}
                            cookiePolicy={'single_host_origin'}
                        />                        
                        
                        
                        
                        
                    </div>

                    </div>
                    
                </div>




            
            
            
               
                
            </div>
        )
    }
}

export default LoginBootstrap
