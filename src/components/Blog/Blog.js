import React, { useEffect, useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MarkDownReaderComponent from "./MarkDownReaderComponent";
import { Link } from "react-router-dom";
import Career from "../Career/Career";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import { CgMenuRight } from "react-icons/cg";
import { FcHome } from "react-icons/fc";
import axios from "axios";
import BlogDataContext from "../../BlogDataContext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Loader from "../Loading/Loader";
import SEO from "../../SEO";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
      paddingTop: 0,
    },
  },
  appBar: {
    zIndex: "-1",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbar: {
    overflowY: "scroll",
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 0,
    paddingTop: "40px",
  },
  content: {
    flexGrow: 1,
    // width: "100vw",
    // padding: theme.spacing(3),
    // overflowY: "scroll",
    marginTop: "30px",
    // paddingRight: "20px",
    // backgroundColor: "white",
  },
}));

function Blog(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState({ 1: true });
  const [selectedIndex, setSelectedIndex] = React.useState(
    props.history.location.pathname.split("/")[2]
  );
  const data = useContext(BlogDataContext);
  useEffect(() => {
    document.getElementById("whatsappbutton").style.display = "none";
    return () => {
      document.getElementById("whatsappbutton").style.display = "initial";
    };
  }, []);
  useEffect(() => {
    setSelectedIndex(props.history.location.pathname.split("/")[2]);
  }, [props.history.location.pathname.split("/")[2]]);

  const handleClick = (index) => {
    setOpen({ [index]: true });
  };

  const handleDrawerToggle = (e) => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <List>
        <h3 style={{ textAlign: "center" }}>CapsCode Blog</h3>
        {["Blog Home"].map((text, index) => (
          <Link to={"/blog/home"} style={{ textDecoration: "none" }}>
            <ListItem
              style={{ color: "#151B54" }}
              key={text}
              selected={selectedIndex == "home"}
            >
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List dense={true} disablePadding={true}>
        {data.length > 0 ? (
          data.map((categoryData, categoryIndex) => (
            <>
              <ListItemButton style={{ color: "grey" }}>
                <ListItemText primary={categoryData.category} />
              </ListItemButton>
              {categoryData.children.map((blogdata, dataIndex) => (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List
                    dense={true}
                    disablePadding={true}
                    style={{ paddingLeft: "17px" }}
                  >
                    <Link
                      to={`/blog/${blogdata.routeName}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItem
                        key={blogdata.sidebarName}
                        style={{ color: "#151B54" }}
                        selected={selectedIndex == blogdata.routeName}
                      >
                        <ListItemText
                          primary={blogdata.sidebarName}
                          style={{
                            color: "black",
                          }}
                        />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>
              ))}
            </>
          ))
        ) : (
          <h4>
            <Loader />
          </h4>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {props.link == "home" || props.link == "" ? (
        <SEO
          title="CapsCode Blogs"
          description="CapsCode Blogs"
          name="CapsCode Blogs"
          type="article"
        />
      ) : (
        <SEO
          title={props.history.location.pathname.split("/")[2]}
          description={`${props.shortTitle}`}
          name="CapsCode Blogs"
          type="article"
        />
      )}
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <AppBar
              position="sticky"
              style={{
                width: "40px",
                position: "fixed",
                right: 20,
                backgroundColor: "transparent",
                color: "red",
                boxShadow: "none",
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <div>
                    <CgMenuRight />
                    <small style={{ display: "block", fontSize: "8px" }}>
                      Blog List
                    </small>
                  </div>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction !== "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <List onClick={handleDrawerToggle}>{drawer}</List>
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <SwipeableDrawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </SwipeableDrawer>
          </Hidden>
        </nav>
        {props.link == "home" || props.link == "" ? (
          <Career setSelectedIndex={setSelectedIndex} />
        ) : (
          <main
            className={classes.content}
            style={{ fontSize: "1rem", lineHeight: " 26px" }}
          >
            <MarkDownReaderComponent
              link={props.link}
              like={props.like}
              heart={props.heart}
              title={props.title}
              shortTitle={props.shortTitle}
              blogLink={props.match.url}
            />
          </main>
        )}
      </div>
    </>
  );
}

export default React.memo(Blog);
