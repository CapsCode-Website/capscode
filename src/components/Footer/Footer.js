import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Share from '../Share/Share'
import { Divider } from '@material-ui/core';
import img from './Flat-Mountains.svg'


function Copyright() {
  return (
    <>
    <Typography variant="body2" style={{fontColor: "white"}}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.capscode.in/">
        CapsCode.in
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop:'50px',
    padding: '10px',
    // borderTopRightRadius:'500px',
    backgroundImage:`url(${img})`,
    // backgroundImage: `url(${require("./productive.png")})`
    // borderBottomLeftRadius:'300px',
    // marginTop: 'auto',
    // backgroundColor: '#2F363F',
    color: "white",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
      // theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:'white'}}>
      <CssBaseline />
      <footer className={classes.footer}>
        
        <Container maxWidth="xs">
          <Typography>Join CapsCode community and help us spreading education across India and improving more</Typography>
        <Share/>
          <Typography variant="body1">Welcome to the world of Learning Code (www.capscode.in)</Typography>
          {/* <Typography variant="body1">Address: No- 333, Hari OM Tower, Lalpur Ranchi, Jharkhand 834005</Typography> */}
          <Typography variant="body1">Phone: 08986774801, 7858833371</Typography>
          <Copyright />
          <a href="https://cctermsandconditions.netlify.app" style={{textDecoration:'none', color:"white"}}><Typography>&#8594; TERMS AND CONDITIONS</Typography></a>
          <a href="https://ccdisclaimer.netlify.app" style={{textDecoration:'none', color:"white"}}><Typography>&#8594; Disclaimer</Typography></a>
          <a href="https://ccprivacypolicy.netlify.app" style={{textDecoration:'none', color:"white"}}><Typography>&#8594; Privacy Policy</Typography></a>
          <Divider/>
          
          <a href='https://play.google.com/store/apps/details?id=com.capscode.in&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          target="_blank" rel="noopener noreferrer"
          ><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style={{width: '100px',
          height: '40px',}} alt="play store"/></a>
         

          <Typography small='true' style={{textAlign:'center', fontColor: "#ffffff" }}>Version: 1.0.1</Typography>
        </Container>
      </footer>
      
    </div>
  );
}