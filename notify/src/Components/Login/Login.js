import { Button, Card, Container, Grid} from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'
import heroku from '../variable'
import GoogleLogin from 'react-google-login';
import Snackbar from '@material-ui/core/Snackbar'


const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

const handleClose = () => {
    setState({ ...state, open: false });
  };

const responseSuccessGoogle = (response) => {
    console.log(response);
    const token = {tokenId : response.tokenId}
    axios.post(`${heroku.baseURL}login`,token)
    .then((response) => {
        if (response.status == 201) {
            
            console.log("logged in --------------------");
            return (
                <div>
                  
                  <Snackbar
                    anchorOrigin={{ 'top', 'center' }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={'top' + 'center'}
                  />
                </div>
              );
        }else if (response.status == 200) {
            console.log("new user registered ------------------");
        }else{
            console.log("err " + response);
        }
        //console.log("response from responseGoogle " + JSON.stringify(response,null,2));
    })
  }
  const responseFailureGoogle = (response) => {
    console.log(response);
    axios.post(`${heroku.baseURL}login`,response.tokenId)
    .then((response) => {
        console.log("response from responseGoogle " + response);
    })
  }

export class Login extends Component {
    render() {
        return (
            <div>
                <Grid container direction='column' justify='center' alignItems="center" >
                    <h1 style={{fontFamily:'cursive'}}>
                        Login
                    </h1>
                    <br></br><br></br><br></br>
                    <Card style={{width:400,height:150,textAlign:'center'}}>
                        Google sign-in
                        <br></br><br></br>
                        <Button >
                        <GoogleLogin
                            clientId="337693724676-nh17c3ruc08dbqb646vs8hobl5oq2n1i.apps.googleusercontent.com"
                            buttonText="Sign in with google"
                            theme='dark'                
                                      
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseFailureGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        </Button>
                    </Card>
                    
                </Grid>
        
            </div>
        )
    }
}

export default Login
