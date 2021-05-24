import { Container, Grid, Tabs } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';

import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react'
import Navbar from '../design/Navbar'
import Sidebar from '../design/Sidebar'
import SidebasCustom from '../design/SidebasCustom'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Ongoing from '../Ongoing/Ongoing';
import Add from '../Add/Add'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


class Dashbord extends Component {
    state ={
        value:0
    }
    handleChange = (event, newValue) => {
        this.setState({value:newValue});
      };

    handleChangeIndex = (index) => {
        this.setState({value:index});
    };  
    
    render() {
        return (
            <div>
                <Navbar />
                <Grid container justify='flex-start' >
                <SidebasCustom ></SidebasCustom>         
                <Container justify='center'>
                <h3>Dashbord</h3>
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="Ongoing"  />
                    <Tab label="Add"  />
                    <Tab label="Done"  />
                    </Tabs>
                </AppBar>
                
                    <TabPanel value={this.state.value} index={0}>
                    <Ongoing></Ongoing>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1} >
                    <Add />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={2}>
                    <h3>done page</h3>
                    </TabPanel>
                

                </Container>       
                
                

                </Grid>
                
                
            </div>
        )
    }
}

export default Dashbord
