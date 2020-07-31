import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Share from '../Share/Share'
import { Divider } from '@material-ui/core';

function Copyright() {
  return (
    <>
    <Typography variant="body2" color="textSecondary">
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
    marginTop:'50px',
    padding: '10px',
    borderTopRightRadius:'500px',
    // borderBottomLeftRadius:'300px',
    // marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:'#C8C8C8'}}>
      <CssBaseline />
      <footer className={classes.footer}>
        
        <Container maxWidth="xs">
          <Typography>Join CapsCode community and help us spreading education across India and improving more</Typography>
        <Share/>
          <Typography variant="body1">Welcome to the world of Learning Code (www.capscode.in)</Typography>
          <Typography variant="body1">Address: No- 333, Hari OM Tower, Lalpur Ranchi, Jharkhand 834005</Typography>
          <Typography variant="body1">Phone: 08986774801, 07858833371</Typography>
          <Copyright />
          <Typography>&#8594;TERMS AND CONDITIONS</Typography>
          <Typography>&#8594;Disclaimer</Typography>
          <Typography>&#8594;Privacy Policy</Typography>
          <Divider/>
          <Typography small color="textSecondary"style={{textAlign:'center'}}>Version: BETA</Typography>
        </Container>
      </footer>
      
    </div>
  );
}