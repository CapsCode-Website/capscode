import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import backimage from "./wave.svg";
import "animate.css/animate.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import "./styles.css";
import Loader from "../Loading/Loader";
import { Link } from "react-router-dom";

var link;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: 'red',
      paddingTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: 'red',
      paddingTop: "40px",
    },
    [theme.breakpoints.down("md")]: {
      // backgroundColor: 'green',
      paddingTop: "90px",
    },
    [theme.breakpoints.down("lg")]: {
      // backgroundColor: 'yellow',
      paddingTop: "20px",
    },
  },

  fontHandler: {
    paddingLeft: "10px",
    fontFamily: ["Nunito", "sans-serif"],
    color: "#2C3335",
    [theme.breakpoints.up("xs")]: {
      fontSize: "3.5em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "5em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5.7em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "6em",
      paddingTop: "60px",
    },
  },

  my_upcomings: {
    // background:"rgba(255,255,255,0.4)",
    backdropFilter: "blur(5px)",
    backfaceVisibility: "hidden",
    borderTop: "1px solid rgba(255,255,255,0.4)",
    borderLeft: "1px solid rgba(255,255,255,0.4)",
    borderRight: "1px solid rgba(255,255,255,0.2)",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },

  item1: {
    order: 2,
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
    [theme.breakpoints.up("xs")]: {
      order: 1,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up("sm")]: {
      order: 2,
    },
    [theme.breakpoints.up("xs")]: {
      order: 2,
    },
  },
}));

function Home() {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  }); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom

  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch("https://rahulnag.github.io/capscodefiles/Upcoming.json")
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log(".........."+result)
          setIsLoaded(true);
          setUpcoming(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  {
    /* recent editied 0905 start here*/
  }
  const [q_error, q_setError] = useState(null);
  const [q_isLoaded, q_setIsLoaded] = useState(false);
  const [q_upcoming, q_setUpcoming] = useState([]);
  useEffect(() => {
    fetch("https://rahulnag.github.io/capscodefiles/QuizLink.json")
      .then((q_res) => q_res.json())
      .then(
        (q_result) => {
          //console.log(".........."+q_result)
          q_setIsLoaded(true);
          q_setUpcoming(q_result);
        },
        (q_error) => {
          q_setIsLoaded(true);
          q_setError(q_error);
        }
      );
  }, []);

  q_upcoming.map((v) => {
    link = v.quizLink;
  });
  // console.log( link)
  // console.log(typeof link)
  {
    /* recent editied 0905 -- end here*/
  }
  localStorage.setItem("currentTab", 0); //initializing to 0 so that we can be able to handle the tab highlighting navigation on page refresh or going to home page
  //if you have any doubt then comment this line and see the issue, issue will not be much just there is conflict between the higlighted tab and the rendered page
  return (
    <div className={classes.root} style={{ backgroundColor: "white" }}>
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        style={{
          // height: "100vh",
          minHeight: "100vh",
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
        }}
      >
        <Grid item xs={12} sm={4} md={7} lg={7}>
          <h1 className={classes.fontHandler}>
            WELCOME TO <p id="typingeffect">CAPSCODE</p>
          </h1>
        </Grid>

        <Grid item xs={12} sm={7} md={5} lg={5} align="center">
          <img
            style={{
              animation: "bounceInDown",
              animationDuration: "1.5s",
              width: "70%",
              height: "70%",
              paddingTop: "20%",
            }}
            src={require("./innovation.webp")}
            alt="capscode.in"
          />
          {/* <Lottie options={defaultOptions} height={450} width={360} /> */}
        </Grid>
        <Grid item lg={12} xs={12} sm={12} md={12} align="center">
          <img
            style={{
              height: "50px",
              width: "60px",
              alignItems: "center",
              // background: "black",
              // color: "red",
            }}
            src={require("./AnguishedGroundedHagfish-max-1mb.gif")}
          />
        </Grid>
      </Grid>

      {/* <Grid container style={{ height: "100vh" }}> */}
      {/* <WhatWeDo /> */}
      {/* </Grid> */}

      <Grid
        container
        style={{
          minHeight: "100vh",
          textAlign: "center",
          background: "rgb(230 232 250 / 27%)",
          // backgroundImage: `url(${wave2})`,
          // backgroundSize: "cover",
          // backgroundPosition: "bottom",
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          {/* <Paper
            elevation={0}
            style={{
              background: "transparent",
              height: "400px",
              width: "500px",
              borderRadius: "30px",
              backgroundImage: `url(${webimage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Paper> */}
          <img
            style={{
              animation: "bounceInDown",
              animationDuration: "1.5s",
              width: "70%",
              height: "70%",
              paddingTop: "30px",
            }}
            src={require("./webnew.png")}
            alt="capscode.in"
          />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: "10px", fontFamily: ["Nunito", "sans-serif"] }}
          >
            <Typography
              fontWeight="fontWeightBold"
              style={{ paddingTop: "2px", fontSize: "35px" }}
            >
              📌 DO YOU NEED A WEBSITE WITH FREE HOSTING ?
            </Typography>

            <Grid item style={{ textAlign: "left" }}>
              <Typography>➥ WE PROVIDE BUSINESS SOLUTION TO STARTUP</Typography>
              <Typography>➥ ONE STOP SOLUTION FOR YOU BUSINESS</Typography>
              <Typography>➥ WE MAKE WEBSITE</Typography>
              <Typography>➥ WE MAKE APPS</Typography>
              <Typography>➥ WE WILL LIST YOU BUSINESS IN GOOGLE</Typography>
              <Typography>
                ➥ WE PROMISE THAT WE GIVE WONDERFUL RESULT AT VERY REASONABLE
                PRICE
              </Typography>
            </Grid>

            <Grid item>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    fontWeight: "700",
                    padding: "12px",
                    boxShadow: "6px 10px 21px -7px rgba(0,0,0,0.51)",
                    textAlign: "center",
                    borderRadius: "30px",
                    background: "#F7DAE4",
                    color: "#535C68",
                  }}
                >
                  CLICK HERE TO QUICK LAUNCH YOUR BUSINESS
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          minHeight: "80vh",
          textAlign: "center",
          background: "rgb(202 250 254 / 31%)",
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: "10px", fontFamily: ["Nunito", "sans-serif"] }}
          >
            <Typography
              fontWeight="fontWeightBold"
              style={{ paddingTop: "2px", fontSize: "35px" }}
            >
              📌 NEED A WEBSITE MAINTENANCE ?
            </Typography>
            <Grid item>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    fontWeight: "700",
                    padding: "12px",
                    boxShadow: "6px 10px 21px -7px rgba(0,0,0,0.51)",
                    textAlign: "center",
                    borderRadius: "30px",
                    background: "rgb(201 255 229 / 43%)",
                    color: "#535C68",
                  }}
                >
                  CLICK HERE TO TAKE SERVICE
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{ width: "100%", height: "100%" }}
        >
          {/* <Paper
            elevation={0}
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${webmain})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Paper> */}
          <img
            style={{
              animation: "bounceInDown",
              animationDuration: "1.5s",
              width: "70%",
              height: "80%",
              paddingTop: "30px",
            }}
            src={require("./maintain.png")}
            alt="capscode.in"
          />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        style={{
          backgroundColor: "rgb(201 255 229 / 43%)",
        }}
      >
        <Box
          fontWeight="fontWeightBold"
          m={1}
          fontSize={17}
          style={{
            boxShadow: "6px 10px 21px -7px rgba(0,0,0,0.51)",
            borderRadius: "30px",
            textAlign: "center",
            color: "#535C68",
            padding: "10px",
            background: "#F7DAE4",
          }}
        >
          <b>UPCOMING & ONGOING EVENTS</b>
        </Box>
      </Grid>

      <Grid
        container
        style={{
          flexGrow: "1",
          minHeight: "70vh",
          background: "rgb(201 255 229 / 43%)",
          fontFamily: ["Nunito", "sans-serif"],
        }}
      >
        {upcoming.length > 0 ? (
          upcoming.map((e, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                lg={3}
                md={3}
                style={{ padding: "10px" }}
              >
                <div
                // data-aos="zoom-in"
                >
                  <Card
                    className={classes.my_upcomings}
                    style={{
                      width: "auto",
                      backgroundImage: `${e.cardColor}`,
                      padding: "15px",
                      borderRadius: "15px",
                      boxShadow: "0 17px 15px 0 rgba(0,0,0,0.2)",
                    }}
                  >
                    <Typography
                      varient="subtitle2"
                      style={{ fontWeight: "600" }}
                    >
                      {e.eventName}
                    </Typography>
                    <Divider />
                    <Typography
                      style={{ marginTop: "10px" }}
                    >{`Duration: ${e.duration}`}</Typography>
                    <Typography>{`When: ${e.date_time}`}</Typography>
                    <Typography>{`Platform: ${e.platform}`}</Typography>
                    <Typography>{`Mode: ${e.type}`}</Typography>
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", fontWeight: "60px" }}
                    >
                      <Typography
                        style={{ fontWeight: "900", textAlign: "center" }}
                      >{`Click to register`}</Typography>
                    </a>
                  </Card>
                </div>
              </Grid>
            );
          })
        ) : (
          <Loader />
        )}
      </Grid>
    </div>
  );
}

export default Home;
