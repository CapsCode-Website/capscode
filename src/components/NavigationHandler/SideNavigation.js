import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import TabContext from "../../contexts/TabContext";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#fcf3f2",
    boxShadow: "none",
    // borderBottomRightRadius: "70px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // alignItems: "right",
    position: "absolute",
    left: 10,
    paddingBottom: "30px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderBottomRightRadius: "30px",
    borderTopRightRadius: "30px",
    backgroundColor: "#fcf3f2",
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
  const TabContextConsumer = React.useContext(TabContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const setter = (v) => {
    TabContextConsumer.setValue(v);
  };

  // UNABLE TO ADD THIS ONE LIKE TOPTAB AS WINDOW OBJECT IS ALREADY IN USE...TO DETETCT THE DRAWER OPEN OR NOT
  // AND MOREOVER IT IS NOT REQUIRED ALSO.
  // window.addEventListener("storage",(e) => {
  // //  handleChange(null, e.newValue);
  //   //TODO: just read the local storage value and change the tabs
  // });

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* added onClick to handle the drawer as if it is open the close it  */}
      <List onClick={handleDrawerToggle}>
        {/* <HashRouter> */}
        <ListItem
          selected={TabContextConsumer.value === 0}
          divider
          button
          component={Link}
          to="/"
        >
          <ListItemText onClick={() => setter(0)}>Home</ListItemText>
        </ListItem>
        <ListItem
          selected={TabContextConsumer.value === 1}
          divider
          button
          component={Link}
          to="/course"
        >
          <ListItemText onClick={() => setter(1)}>Courses</ListItemText>
        </ListItem>
        <ListItem
          selected={TabContextConsumer.value === 2}
          divider
          button
          component={Link}
          to="/services"
        >
          <ListItemText onClick={() => setter(2)}>Services</ListItemText>
        </ListItem>
        <ListItem
          selected={TabContextConsumer.value === 3}
          divider
          button
          component={Link}
          to="/blog"
        >
          <ListItemText onClick={() => setter(3)}>Blogs</ListItemText>
        </ListItem>
        <ListItem
          selected={TabContextConsumer.value === 4}
          divider
          button
          component={Link}
          to="/aboutus"
        >
          <ListItemText onClick={() => setter(4)}>About Us</ListItemText>
        </ListItem>
        <ListItem
          selected={TabContextConsumer.value === 5}
          divider
          button
          component={Link}
          to="/contact"
        >
          <ListItemText onClick={() => setter(5)}>Contact</ListItemText>
        </ListItem>
        {/* <ListItem
          selected={TabContextConsumer.value === 6}
          divider
          button
          component={Link}
          to="/tutorials"
        >
          <ListItemText onClick={() => setter(6)}>Tutorials</ListItemText>
        </ListItem> */}
        {/* <ListItem selected={TabContextConsumer.value === 6} divider button component={Link} to='/gallery'><ListItemText onClick={()=> setter(6)}>Gallery</ListItemText></ListItem> */}
        {/* </HashRouter> */}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const onDrawerOpen = () => {
    return null;
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{
          height: "40px",
          background: "rgba(206, 72, 17, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(4.9px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <CgMenuGridO />
          </IconButton>
          <a
            href="https://www.capscode.in"
            target="_self"
            style={{
              textDecoration: "none",
              width: "4em",
              height: "4em",
              marginLeft: "25px",
              paddingTop: "3px",
            }}
          >
            <img
              alt="capscodeloadosidebar"
              style={{
                width: "4em",
                height: "2.5em",
                paddingLeft: "15px",
                alignItems: "center",
              }}
              src={require("../Assets/capscode1200.webp")}
            />
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
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          style={{
            background: "rgba(206, 72, 17, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(4.9px)",
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </nav>
    </div>
  );
}

export default SideNavigation;
