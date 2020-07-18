import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import upcoming from './Upcoming.json'
import { Card } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import backimage from './wave.svg'
import 'animate.css/animate.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import "./styles.css"
import "./ripple.css"

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: 'red',
      paddingTop: '60px',
    },
    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'green',
      paddingTop: '80px',
    },
    [theme.breakpoints.up('lg')]: {
      // backgroundColor: 'yellow',
      paddingTop: '80px',
    },   
  },
}))


function Home() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch("https://rahulnag.github.io/capscodefiles/Upcoming.json")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(".........."+result)
          setIsLoaded(true);
          setUpcoming(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  localStorage.setItem('currentTab', 0) //initializing to 0 so that we can be able to handle the tab highlighting navigation on page refresh or going to home page
  //if you have any doubt then comment this line and see the issue, issue will not be much just there is conflict between the higlighted tab and the rendered page
  return (
    <div className={classes.root} style={{ backgroundImage: `url(${backimage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <Typography component="div" style={{ paddingLeft: '20px', paddingTop: '10px' }}>
        <Box fontWeight="fontWeightBold" textAlign="left"  m={1} letterSpacing={5} fontSize={30}>
          WELCOME TO CAPSCODE.IN
        </Box>
      </Typography>
      <Grid container style={{ animation: 'pulse', animationDuration: '3s', height: '100%', minHeight: '95.5vh' }}>
        <Grid item sm={12} md={6} lg={6} style={{width: '100%', paddingLeft: '10px', paddingRight: '1 0px' }}>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1} fontSize={17}>WANT TO BECOME A CODER?<br/>WANT TO GET READY FOR FUTURE? WANT TO MAKE YOUR KID READY FOR FUTURE? <br/>NEED GUIDENCE IN LIFE?</Box>
            <Box fontWeight="fontWeightBold" m={1} fontSize={17}>THEN YOU ARE IN THE RIGHT PLATFORM &#8594;</Box>
            <Box fontWeight="fontWeightBold" m={1} fontSize={17}>LETS JOIN US ONLINE OR OFFLINE AND WRITE SOME CODE, EXPLORE THE NEW TECHNOLOGIES AND GET GUIDENCE FROM OUR EXPERTS</Box>
            <Box fontWeight="fontWeightBold" m={1} fontSize={17}>START WRITING CODE FROM THE VERY NEXT DAY YOU HAVE JOINED CapsCode.in</Box>
            <Box fontWeight="fontWeightBold" m={1} fontSize={17}>SO, WHAT ARE YOU WAITING FOR !!! </Box>
            <Box fontWeight="fontWeightBold" m={1} fontSize={17}>CHECK UPCOMING EVENTS BELOW  &darr;</Box>
            

            {/* FOR QUIZ */}
            
            <Grid item sm={12} md={12} lg={12} className="shakey" style={{
              backgroundColor:'grey',
              padding:'8px',
              marginRight:'10px',
              borderRadius:'40px'}}>
              <a href="https://capscodequiz.netlify.app/" target="_blank" style={{textDecoration: 'none',}}>
              <Grid item sm={12} md={12} lg={12} style={{
                  fontSize:'12px',
                  padding:'15px',
                  borderRadius:'35px',
                  backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)',
                  color:'yellow'}}>
                  <b>CLICK TO TAKE PART IN WEEKLY QUIZ AND WIN EXCITING PRIZES AND CASH PRIZES ALSO!</b>
              </Grid>
            </a>
            
            </Grid>
           
            
            <Box fontWeight="fontWeightBold" m={1} fontSize={10}>(We are now available at Ranchi for Offline course)</Box>
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6} style={{ padding: '10px', justifyContent: 'flex-end', }}>
          <img style={{ animation: 'bounceInDown', animationDuration: '2s', width: '89%', height: '90%', paddingLeft: '10px' }} src={require('./innovation_.png')} alt="capscode.in" />
        </Grid>
      </Grid>


      <Grid container style={{ flexGrow: '1', height: '95%', minHeight: 'auto', minHeight: '40vh' }}>
        {
          upcoming.map((e, i) => {

            return (
              <Grid key={i} item xs={12} sm={6} lg={3} md={3} style={{ padding: '10px' }}>
                <div data-aos="flip-up">
                  <Card 
                    style={{ width: 'auto', backgroundImage: `${e.cardColor}`, padding: '15px', borderRadius: '15px', boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)' }}
                  >
                    <Typography varient='subtitle2' style={{ fontWeight: '600', }}>{e.eventName}</Typography>
                    <Divider />
                    <Typography style={{ marginTop: '10px' }}>{`When: ${e.date_time}`}</Typography>
                    <Typography>{`Duration: ${e.duration}`}</Typography>
                    <Typography>{`Platofrm: ${e.platform}`}</Typography>
                    <a href={e.link} target="_blank" style={{ textDecoration: 'none', fontWeight: '60px' }}><Typography style={{ fontWeight: '900', textAlign: 'center' }}>{`Click to join`}</Typography></a>
                  </Card>
                </div>
              </Grid>
            )
          }
          )
        }
      </Grid>
    </div>
  )

}


export default Home;