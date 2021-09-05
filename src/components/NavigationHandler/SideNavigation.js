import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link,HashRouter} from 'react-router-dom'


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor:'#fcf3f2', 
    boxShadow: 'none',
    borderBottomRightRadius: '70px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderBottomRightRadius: '30px',
    borderTopRightRadius: '30px',
    backgroundColor:'#fcf3f2',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideNavigation(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //initialised with localstorage value so that the topnav and sidenav will in sync
  const [selected, setSelected] = React.useState(Number(localStorage.getItem('currentTab')))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setSelected(Number(localStorage.getItem('currentTab')))
  };

  const setter = (v) =>{
    setSelected(v)
    localStorage.setItem('currentTab', v);
  };


// UNABLE TO ADD THIS ONE LIKE TOPTAB AS WINDOW OBJECT IS ALREADY IN USE...TO DETETCT THE DRAWER OPEN OR NOT
// AND MOREOVER IT IS NOT REQUIRED ALSO.
  // window.addEventListener("storage",(e) => {
  //   console.log("rahullllllllllllllllll........."+e.newValue)
  //   // localStorage.setItem('currentTab', e.newValue);
  // //  handleChange(null, e.newValue);  
  //   // localStorage.setItem('currentTab', e.newValue);
  //   // setValue(Number(localStorage.getItem('currentTab')));
  //   //TODO: just read the local storage value and change the tabs
  //   setSelected(Number(localStorage.getItem('currentTab')))
  // });

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* added onClick to handle the drawwe as if it is open the close it  */}
      <List onClick={handleDrawerToggle}> 
      {/* <HashRouter> */}
          <ListItem selected={selected === 0} divider button component={Link} to='/'><ListItemText onClick={()=> setter(0)}>Home</ListItemText></ListItem> 
          <ListItem selected={selected === 1} divider button component={Link} to='/course'><ListItemText onClick={()=> setter(1)}>Courses</ListItemText></ListItem> 
          <ListItem selected={selected === 2} divider button component={Link} to='/services'><ListItemText onClick={()=> setter(2)}>Services</ListItemText></ListItem>
          <ListItem selected={selected === 3} divider button component={Link} to='/blog'><ListItemText onClick={()=> setter(3)}>Blogs</ListItemText></ListItem>  
          <ListItem selected={selected === 4} divider button component={Link} to='/aboutus'><ListItemText onClick={()=> setter(4)}>About Us</ListItemText></ListItem> 
          <ListItem selected={selected === 5} divider button component={Link} to='/contact'><ListItemText onClick={()=> setter(5)}>Contact</ListItemText></ListItem> 
          <ListItem selected={selected === 6} divider button component={Link} to='/tutorials'><ListItemText onClick={()=> setter(6)}>Tutorials</ListItemText></ListItem>
          {/* <ListItem selected={selected === 6} divider button component={Link} to='/gallery'><ListItemText onClick={()=> setter(6)}>Gallery</ListItemText></ListItem> */}
        {/* </HashRouter> */}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const onDrawerOpen = ()=>{
    return null
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <a href="https://www.capscode.in" target="_self" style={{textDecoration: 'none',width:'4.5em', height:'3em',}}>
            <img style={{width:'4em', height:'2.5em', paddingLeft:'7px'}} src={require('./cap.png')} alt="capscode" />
          </a>
          {/* <Typography style={{textShadow: '2px 2px 5px yellow'}} variant="h6" noWrap>
            {`<CapsCode />`}
            
          </Typography> */}
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
          <SwipeableDrawer
            onOpen={onDrawerOpen}
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
      </nav>
    </div>
  );
}



export default SideNavigation;
