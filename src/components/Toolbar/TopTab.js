import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link,HashRouter } from 'react-router-dom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function TopTab(props) {
  const classes = useStyles();

  // console.log("mmmmmmmmmmmmmmm"+localStorage.getItem('currentTab'))
  
  // localStorage.setItem('currentTab', 0);
  const [value, setValue] = React.useState(Number(localStorage.getItem('currentTab')));
  // console.log("/////////////",value)
  
  const handleChange = (event, newValue) => {
    localStorage.setItem('currentTab', newValue);
    setValue(Number(localStorage.getItem('currentTab')));
  };



  window.addEventListener("hashchange",(e) => {
    // localStorage.setItem('currentTab', e.newValue);
  //  handleChange(null, e.newValue);  
    // localStorage.setItem('currentTab', e.newValue);
    // setValue(Number(localStorage.getItem('currentTab')));
    //TODO: just read the local storage value and change the tabs
    setValue(Number(localStorage.getItem('currentTab')));
  });



  return (
    <div className={classes.root} >
       {/* I HAVE USED HashRouter THEN ONLY IT WORKED FINE HERE BELOW AND ASLO IN APP.JS COMPONENT*/}
      <HashRouter>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar position="fixed"  style={{borderBottomRightRadius:'70px',backgroundColor:'#fef3f4', boxShadow: 'none', paddingTop:'0'}}>
      {/* <Typography variant="h6" noWrap style={{textShadow: '2px 2px 5px yellow',paddingLeft: '15px', paddingTop: '5px', color:'black'}}>
            {"< CapsCode />"}
      </Typography> */}
      <a href="https://www.capscode.in" target="_self" style={{textDecoration: 'none'}}>
        <img style={{width:'5em', height:'2.5em', paddingLeft:'15px',paddingTop:'3px'}} src={require('./cap.png')} alt="capscode" />
      </a>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor= "secondary"
        variant="scrollable" //this is commented as both varient:scrollable and centered will not work together
        scrollButtons="auto"  //on
        aria-label="scrollable auto tabs example"   
        centered='true'    
        

      >
        <Tab label="Home" component={Link} to='/' value={0} />
        <Tab label="Courses" component={Link} to='/course' value={1}/>
        <Tab label="Services" component={Link} to='/services' value={2}/>
        <Tab label="Blogs" component={Link} to='/blog'value={3}/>
        <Tab label="About Us" component={Link} to='/aboutus' value={4}/>
        <Tab label="Contact" component={Link} to='/contact' value={5}/>
        <Tab label="Tutorials" component={Link} to='/tutorials' value={6}/>
        {/* <Tab label="Gallery" component={Link} to='/gallery' value={7}/> */}
        
      </Tabs>
      
      </AppBar>
      </HideOnScroll>
      </HashRouter>
    </div>
  );
}


export default TopTab;