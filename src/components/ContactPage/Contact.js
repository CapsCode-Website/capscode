import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
      marginTop:'10px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
      marginTop:'30px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
      marginTop:'60px',
    },
  },
}))



export default function Contact(){
  localStorage.setItem('currentTab', 4);
  const classes=useStyles();
    return(
      <Grid container >
        
        <iframe src="https://capscode.typeform.com/to/H2mejL3p" className={classes.root} 
        style={{minHeight:'88vh'}}>Loading, Please wait </iframe>
      </Grid>
    )
  }

