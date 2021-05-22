import { AppBar, Button, ButtonGroup, Card, Container,Grid,Paper, ThemeProvider, Toolbar, Typography } from '@material-ui/core'

import React, { Component } from 'react'
import Navbar from '../design/Navbar'
import Sidebar from '../design/Sidebar'
import Icon from '@material-ui/icons/Send';


export class WelcomePage extends Component {
    render() {
        return (
            <div>
                <ThemeProvider>
                
                    
                        <AppBar>
                            <Toolbar>                        
                                <div style={{flexGrow:1}}></div>
                                <Typography variant='h4' style={{color:'red',fontFamily:'cursive'}}>
                                    Notifi
                                </Typography>
                                <div style={{flexGrow:1}}></div>
                                <ButtonGroup paddingLeft='100px' variant='text'>
                                <Button href='register' style={{color:'orange'}}>
                                    register 
                                </Button>
                                <Button href='login' color='secondary' >
                                    login 
                                </Button>

                                </ButtonGroup>
                            
                            </Toolbar>
                        </AppBar>
                        <br></br>
                        <br></br>
                        <br></br><br></br>
                    
                    <Grid container direction= {'column'} spacing={24}>

                    <Grid item style={{backgroundColor:'green',textAlign:'center'}}>
                        <Typography>
                            ------------- Welcome Page ------
                        </Typography>
                    </Grid>
                    <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Button>click</Button>
                    <Button>click</Button>

                    </Grid>
                    

                </Grid>
                </ThemeProvider>
               
            </div>
        )
    }
}

export default WelcomePage
