import { AppBar, Button, ButtonGroup, Card, Container,Grid,Paper, ThemeProvider, Toolbar } from '@material-ui/core'

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
                        <Button style={{color:'red'}} size='large'>
                            notifi
                        </Button>
                        <div style={{flexGrow:1}}></div>
                        <ButtonGroup paddingLeft='100px' variant='text'>
                        <Button style={{color:'orange'}} paddingLeft="85%">
                            register 
                         </Button>
                        <Button color='secondary' >
                            login 
                         </Button>

                        </ButtonGroup>
                       
                    </Toolbar>
                </AppBar> 
                
                
                <Container maxWidth='md' color='secondary' variant='contained'>
                    <Grid spacing='3'>
                    <Button 
                    endIcon={<Icon></Icon>}
                    variant="outlined" 
                    color="secondary">
                        Primary
                    </Button>
                        <Paper style={{height:50,width:150,}} color='primary'>
                            hi
                        </Paper>
                        <Paper style={{height:50,width:150,}}>
                            hi
                        </Paper>
                        <Paper style={{height:50,width:150,}}>
                            hi
                        </Paper>
                       
                    </Grid>
                </Container>
                </ThemeProvider>
            </div>
        )
    }
}

export default WelcomePage
