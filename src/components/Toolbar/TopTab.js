import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import "./TopTab.css";
import TabContext from "../../contexts/TabContext";
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
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 300,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function TopTab(props) {
  const classes = useStyles();
  const TabContextConsumer = React.useContext(TabContext);
  return (
    <div className={classes.root}>
      {/* I HAVE USED HashRouter THEN ONLY IT WORKED FINE HERE BELOW AND ALSO IN APP.JS COMPONENT*/}
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          style={{
            display: "flex",
            flexDirection: "row",
            float: "right",
            boxShadow: "none",
            borderRadius: "50px",
            margin: "12px 12px 0px 12px",
            width: "97vw",
            background: "rgba(206, 72, 17, 0.1)",
            backdropFilter: "blur(4.9px)",
          }}
        >
          <div style={{ flex: 2, justifyContent: "center" }}>
            <a
              href="https://www.capscode.in"
              target="_self"
              style={{ textDecoration: "none" }}
            >
              <img
                alt="capscodelogotopbar"
                style={{
                  width: "3em",
                  height: "3em",
                  paddingLeft: "6px",
                  paddingTop: "5px",
                }}
                src={require("../Assets/capscode1200.webp")}
              />
            </a>
          </div>
          <Tabs
            value={TabContextConsumer.value}
            // onChange={handleChange}
            indicatorColor="secondary"
            // textColor="secondary"
            variant="scrollable" //this is commented as both varient:scrollable and centered will not work together
            scrollButtons="auto" //on
            aria-label="scrollable auto tabs example"
            centered="true"
          >
            <div>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  TabContextConsumer.setValue(0);
                }}
              >
                <Tab label="Home" style={{ fontWeight: "bolder" }} />
              </Link>
            </div>

            <div>
              <Link
                to="/course"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  TabContextConsumer.setValue(1);
                }}
              >
                <Tab label="Courses" style={{ fontWeight: "bolder" }} />
              </Link>
            </div>

            <div>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  TabContextConsumer.setValue(2);
                }}
              >
                <Tab label="Services" style={{ fontWeight: "bolder" }} />
              </Link>
            </div>

            <div>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  TabContextConsumer.setValue(3);
                }}
              >
                <Tab label="Blog" style={{ fontWeight: "bolder" }} />
              </Link>
            </div>

            <div>
              <Link
                to="/aboutus"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  TabContextConsumer.setValue(4);
                }}
              >
                <Tab label="About Us" style={{ fontWeight: "bolder" }} />
              </Link>
            </div>

            <div>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  TabContextConsumer.setValue(5);
                }}
              >
                <Tab label="Contact" style={{ fontWeight: "bolder" }} />
              </Link>
            </div>
          </Tabs>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
export default TopTab;
