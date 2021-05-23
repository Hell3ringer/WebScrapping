import { Button, Card, Container, Grid} from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'
import heroku from '../variable'
import GoogleLogin from 'react-google-login';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }



export class Login extends Component {
    state = {
        open : false,
        snackbarMessage:'',
        severity:''
    }

    handleClose = () => {
        this.setState({open:false})
        window.location.replace('/dashbord')
    };

      responseSuccessGoogle = (response) => {
        //console.log(response);
        const token = {tokenId : response.tokenId}
        axios.post(`${heroku.baseURL}login`,token)
        .then((response) => {
            if (response.status == 201) {
                
                console.log("logged in --------------------");
                this.setState({open:true,snackbarMessage:"login successfull",severity:'success'})
               //window.location.replace('/dashbord')
            }else if (response.status == 200) {
                console.log("new user registered ------------------");
                this.setState({open:true,snackbarMessage:"successfully registered",severity:'success'})
            }else{
                console.log("err " + response);
                this.setState({open:true,snackbarMessage:"An error has occured",severity:'error'})
            }
            //console.log("response from responseGoogle " + JSON.stringify(response,null,2));
        })
      }
      responseFailureGoogle = (response) => {
        console.log(response);
        axios.post(`${heroku.baseURL}login`,response.tokenId)
        .then((response) => {
            console.log("response from responseGoogle " + response);
        })
      }
    
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
                                      
                            onSuccess={this.responseSuccessGoogle}
                            onFailure={this.responseFailureGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        </Button>
                       
                        <Snackbar 
                        anchorOrigin={{ vertical: 'top',
                        horizontal: 'right' }}
                        open={this.state.open}
                        onClose={this.handleClose}
                        //message={this.state.message}
                        autoHideDuration = {1800}   >
                            <Alert onClose={this.handleClose} severity={this.state.severity}>
                            {this.state.snackbarMessage}
                            </Alert>
                        </Snackbar>
                        <Button onClick={() => this.setState({open:true,message:"login successfull"})}>
                            open snack bar
                        </Button>
                    </Card>
                    
                </Grid>
        
            </div>
        )
    }
}

export default Login
