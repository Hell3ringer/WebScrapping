import { Button, Card, Container, Grid} from '@material-ui/core'
import React, { Component } from 'react'
import Google from '@material-ui/icons/EmojiNature'
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
  }

export class Login extends Component {
    render() {
        return (
            <div>
                <Grid container direction='column' justify='center' alignItems="center" >
                    <h1>
                        Login
                    </h1>
                    <Card style={{width:200,height:150,textAlign:'center'}}>
                        Google signin
                        <br></br><br></br>
                        <Button >
                        <GoogleLogin
                            clientId="337693724676-nh17c3ruc08dbqb646vs8hobl5oq2n1i.apps.googleusercontent.com"
                            buttonText="Google Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
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
