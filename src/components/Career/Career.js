import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Wave from './wave.jpg'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: 'red',
      marginTop:'60px',
    },
    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'green',
      marginTop:'90px',
    },
    [theme.breakpoints.up('lg')]: {
      // backgroundColor: 'yellow',
      marginTop:'90px',
    },
    
  },
  openings:{
    borderRadius:'15px',
    backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
    border:'4px solid white',
    minHeight:'60vh',
    transition: 'transform .2s',
    "&:hover": {
      // boxShadow: '0 3px 5px 0 rgba(0,0,0,0.08)',
      boxShadow: 'inset -12px -8px 40px #464646',
      transform: 'scale(1.05)',
    },
  },
  openingHeading:{
    borderTopLeftRadius:'11px',
    borderTopRightRadius:'11px',
    backgroundImage: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
    padding:'15px', 
    marginBottom:'3px'
  }
}))

export default function Career(){
  localStorage.setItem('currentTab', 2);
  const classes = useStyles();
        return(
          // backgroundImage: `url(${Wave})`,
          <Grid className={classes.root} container  style={{ padding:'20px', minHeight: '83.5vh'}}>
            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
              <div className={classes.openingHeading}>
              <Typography >React JS Developer/ Trainer </Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
              </div>
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>Must a pasionate developer and a enthuastic learner.
                Should have knoledge in basics of React, React Hooks
              </p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>JavaScript Developer/ Trainer </Typography>
              <Typography>Experience: 0 yr</Typography>
            </div>
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>Must a pasionate developer and a enthuastic learner.
                Should have knoledge in basics of React, React Hooks
              </p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>Node JS Developer/ Trainer </Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
            </div>
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>Must a pasionate developer and a enthuastic learner.
                Should have knoledge in basics of React, React Hooks
              </p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>Mongo DB Developer/ Trainer </Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
             </div> 
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>Must a pasionate developer and a enthuastic learner.
                Should have knoledge in basics of React, React Hooks
              </p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>Mongo DB Developer/ Trainer </Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
             </div> 
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>Must a pasionate developer and a enthuastic learner.
                Should have knoledge in basics of React, React Hooks
              </p>
              </div>
            </Grid>
          </Grid>
        )
}