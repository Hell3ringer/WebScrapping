import { Card, CssBaseline, Divider, Drawer, fade, hexToRgb, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, rgbToHex } from '@material-ui/core'
import React from 'react'
import DashboardIcon from '@material-ui/icons/DashboardRounded'
import HelpIcon from '@material-ui/icons/Help'
import StatsIcon from '@material-ui/icons/ShowChart'

import { green } from '@material-ui/core/colors';

const drawerWidth = 240;
const useStyles = makeStyles((themes) => ({
    root : {
        display:'flex',
    },
    drawer : {
        
        width:drawerWidth,        
        flexShrink:0,
        
    },
    transparentDiv : {
        position:'absolute',
        botton : '10px'
    },
    drawerPaper: {
        width:drawerWidth,
        marginTop:'64px',
        backgroundColor:'#F96167'
        
    },
}))





function SidebasCustom() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Drawer
            variant='permanent'
            className={classes.drawer}
            classes={{paper:classes.drawerPaper}}
            anchor='left'
            >
                <div>
                    
                    <Divider />
                    <List classes={{paper:classes.drawerPaper}}>
                        <ListItem button >
                            <ListItemIcon>
                                {<DashboardIcon style={{color:'#F9D342'}}/>}
                            </ListItemIcon>                          
                            
                            <ListItemText primary='Dashbord' style={{color:'#F9D342'}}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                {<StatsIcon style={{color:'#F9D342'}}/>}
                            </ListItemIcon>                          
                            
                            <ListItemText primary='Stats' style={{color:'#F9D342'}}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                {<HelpIcon style={{color:'#F9D342'}}/>}
                            </ListItemIcon>                          
                            
                            <ListItemText primary='Help' style={{color:'#F9D342'}}/>
                        </ListItem>
                        
                    </List>
                   <h1 style={{bottom:'50px',position:'absolute',paddingLeft:'50px',fontSize:"45px",fontFamily:'cursive',color:'red'}}>Notifi</h1>
                </div>


            </Drawer>
        </div>
    )
}

export default SidebasCustom
