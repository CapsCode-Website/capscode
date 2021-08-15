import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, HashRouter, BrowserRouter } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";

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
  const [value, setValue] = React.useState(
    Number(localStorage.getItem("currentTab"))
  );
  // console.log("/////////////",value)

  // const handleChange = (event, newValue) => {
  //   console.log(event, newValue);
  //   localStorage.setItem("currentTab", newValue);
  //   setValue(Number(localStorage.getItem("currentTab")));
  // };

  // window.addEventListener("hashchange", (e) => {
  //   // localStorage.setItem('currentTab', e.newValue);
  //   //  handleChange(null, e.newValue);
  //   // localStorage.setItem('currentTab', e.newValue);
  //   // setValue(Number(localStorage.getItem('currentTab')));
  //   //TODO: just read the local storage value and change the tabs
  //   setValue(Number(localStorage.getItem("currentTab")));
  // });

  return (
    <div className={classes.root}>
      {/* I HAVE USED HashRouter THEN ONLY IT WORKED FINE HERE BELOW AND ASLO IN APP.JS COMPONENT*/}
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          style={{
            borderBottomRightRadius: "70px",
            backgroundColor: "#fef3f4",
            boxShadow: "none",
            paddingTop: "0",
          }}
        >
          <a
            href="https://www.capscode.in"
            target="_self"
            style={{ textDecoration: "none" }}
          >
            <img
              style={{
                width: "5em",
                height: "2.5em",
                paddingLeft: "15px",
                paddingTop: "3px",
              }}
              src={require("./cap.png")}
              alt="capscode"
            />
          </a>
          <Tabs
            value={value}
            // onChange={handleChange}
            indicatorColor="secondary"
            textcolor="secondary"
            variant="scrollable" //this is commented as both varient:scrollable and centered will not work together
            scrollButtons="auto" //on
            aria-label="scrollable auto tabs example"
            // centered="true"
          >
            <Link
              to="/"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 0);
                setValue(0);
              }}
            >
              <Tab label="Home" />
            </Link>

            <Link
              to="/course"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 1);
                setValue(1);
              }}
            >
              <Tab label="Courses" />
            </Link>

            <Link
              to="/services"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 2);
                setValue(2);
              }}
            >
              <Tab label="Services" />
            </Link>

            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 3);
                setValue(3);
              }}
            >
              <Tab label="Blogs" />
            </Link>

            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 4);
                setValue(4);
              }}
            >
              <Tab label="About Us" />
            </Link>

            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 5);
                setValue(5);
              }}
            >
              <Tab label="Contact" />
            </Link>

            <Link
              to="/tutorials"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                localStorage.setItem("currentTab", 6);
                setValue(6);
              }}
            >
              <Tab label="Tutorials" />
            </Link>
          </Tabs>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
export default TopTab;
