import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import backimage from "./Assets/wave.svg";
import whatwedosvg from "./Assets/whatwedosvg.svg";
import whatwedosvg1 from "./Assets/whatwedosvg1.svg";
import whatwedosvg2 from "./Assets/whatwedosvg2.svg";
import whatwedosvg4 from "./Assets/whatwedosvg4.svg";
import whatwedosvg5 from "./Assets/whatwedosvg5.svg";
import whatwedosvg6 from "./Assets/whatwedosvg6.svg";
import whatwedosvg7 from "./Assets/whatwedosvg7.svg";
import whatwedosvg8 from "./Assets/whatwedosvg8.svg";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import Loader from "../Loading/Loader";
import SliderCards from "./SliderCards";
import {
  BsBarChartLineFill,
  BsFillBrightnessHighFill,
  BsFillMicFill,
  BsBraces,
} from "react-icons/bs";
import { businessdata } from "./whycapscodebusinessdata";
import { studentdata } from "./whycapscodestudentdata";
import SEO from "../../SEO";
import InviteUsForm from "./InviteUsForm";
import TabContext from "../../contexts/TabContext";

const useStyles = makeStyles((theme) => ({
  fontHandler: {
    paddingLeft: "10px",
    color: "var(--blackcolor)",
    [theme.breakpoints.up("xs")]: {
      fontSize: "3.5em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "4em",
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
    behavior: "smooth",
  }); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom

  const TabContextConsumer = React.useContext(TabContext);
  const classes = useStyles();
  const [upcoming, setUpcoming] = useState([]);
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  useEffect(() => {
    TabContextConsumer.setValue(0);
  }, []);

  useEffect(() => {
    fetch("https://rahulnag.github.io/capscodefiles/Upcoming.json")
      .then((res) => res.json())
      .then((result) => {
        setUpcoming(result);
      })
      .catch((e) => console.error(e));
  }, []);

  //if you have any doubt then comment this line and see the issue, issue will not be much just there is conflict between the higlighted tab and the rendered page
  return (
    <>
      {/* the below SEO details needs to be same as /public/index.html */}
      <SEO
        title="CapsCode"
        description="Website development in Ranchi, Jharkhand, Learn web development, JavaScript, ReactJS, NodeJS, MongoDB, MERN, HTML, CSS, GitHub, Docker, Web Development Blog"
        name="CapsCode"
        type="website"
      />
      <div className={classes.root} style={{ backgroundColor: "white" }}>
        {/* THE LANDING PART OF THE HOME PAGE -- WELCOME TO CAPSCODE */}
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          style={{
            minHeight: "100vh",
            backgroundImage: `url(${backimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* THE WELCOME TO CAPSCODE TEXT PART */}
          <Grid item xs={12} sm={4} md={7} lg={7}>
            <h1 className={classes.fontHandler}>
              WELCOME TO
              <p id="typingeffect">CAPSCODE</p>
            </h1>
            <h3
              style={{
                textAlign: "center",
                fontStyle: "italic",
                color: "grey",
              }}
            >
              We are Coders
            </h3>

            <span style={{ lineHeight: "10px" }}>
              <h3 className="Slogans">
                We teach Code{" "}
                <span role="img" aria-labelledby="coding">
                  👨‍💻
                </span>
                | We build Website{" "}
                <span role="img" aria-labelledby="laptop">
                  💻
                </span>
              </h3>
              <h3 className="Slogans">
                We provide IT Support
                <span role="img" aria-labelledby="support">
                  🦽
                </span>
                | We help grow Business{" "}
                <span role="img" aria-labelledby="launch">
                  🚀
                </span>
              </h3>
              <h3 className="Slogans">
                We provide FREE Consultation
                <span role="img" aria-labelledby="phone">
                  ☎️
                </span>
              </h3>
            </span>
          </Grid>

          {/* HOME PAGE IMAGE */}
          <Grid item xs={12} sm={7} md={5} lg={5} align="center">
            <img
              alt="homepageimage"
              style={{
                width: "100%",
                height: "100%",
                paddingTop: "20%",
              }}
              src={require("./Assets/home.webp")}
            />
            {/* <Lottie options={defaultOptions} height={450} width={360} /> */}
          </Grid>

          {/* HOME PAGE DOWN ARROW ANIMATION */}
          <Grid item lg={12} xs={12} sm={12} md={12} align="center">
            <img
              alt="serviceimage"
              style={{
                height: "50px",
                width: "60px",
                alignItems: "center",
              }}
              src={require("./Assets/AnguishedGroundedHagfish-max-1mb.gif")}
            />
          </Grid>
        </Grid>
        {/* LANDING PART ENDS */}

        {/* WHAT WE DO AT CAPSCODE */}
        <Typography
          className="HomeHeadings"
          variant="h3"
          fontWeight="fontWeightBold"
          style={{
            paddingTop: "2px",
            color: "var(--primary-color1)",
            fontWeight: "bolder",
            marginBottom: "30px",
          }}
        >
          <BsBarChartLineFill />
          What we do at CapsCode ?
        </Typography>
        <Grid
          container
          style={{
            minHeight: "70vh",
            textAlign: "center",
            backgroundImage: `url(${whatwedosvg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}
            style={{
              backgroundImage: `url(${whatwedosvg1})`,
              backgroundRepeat: "no-repeat",
              textAlign: "center",
            }}
            className="WhatWeDoCardHolder"
          >
            <div className="WhatWeDoCards">
              <figure>
                <img
                  alt="CapsCode-For Student"
                  src={require("./Assets/student.webp")}
                />
              </figure>
              <Typography variant="h4" className="WhatWeDoCardHeading">
                If you are Student
              </Typography>

              <div className="WhatWeDoCardText">
                <p>
                  High quality industry level course by an industry experts at
                  affordable price
                </p>
                <p>We teach latest technologies</p>
                <p>24/7 Support in understanding concepts</p>
                <p>Industry level use cases and projects with full support</p>
                <p>Free consultation</p>
                <div>
                  <button
                    className="RouteButton"
                    style={{ margin: "20px", minWidth: "90px" }}
                    onClick={() => {
                      history.push("/blog/home");
                      TabContextConsumer.setValue(3);
                    }}
                  >
                    Read Blogs ▶︎
                  </button>
                  <button
                    className="RouteButton"
                    style={{ margin: "20px", minWidth: "90px" }}
                    onClick={() => {
                      history.push("/course");
                      TabContextConsumer.setValue(1);
                    }}
                  >
                    Courses ▶︎
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}
            style={{
              backgroundImage: `url(${whatwedosvg2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="WhatWeDoCardHolder"
          >
            <div className="WhatWeDoCards">
              <figure>
                <img
                  alt="A rather marvellous macaw, opening one of its wings to support the cause."
                  src={require("./Assets/business.webp")}
                />
              </figure>
              <Typography variant="h4" className="WhatWeDoCardHeading">
                If you are Business
              </Typography>

              <div className="WhatWeDoCardText">
                <p>
                  Help taking your business online in very affordable pricing.
                </p>
                <p>We build, host websites with 90%+ SEO</p>
                <p>Complete lifetime support</p>
                <p>High quality result by our Dedicated team</p>
                <p>24/7 Support & Fast implementation</p>
                <p>Free consultation</p>
                <div>
                  <button
                    className="RouteButton"
                    style={{ minWidth: "90px" }}
                    onClick={() => {
                      history.push("/services");
                      TabContextConsumer.setValue(2);
                    }}
                  >
                    Services ▶︎
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* WHAT WE DO ENDS */}

        {/* TESTIMONIALS START */}
        {/* <Grid
        container
        direction="column"
        style={{
          minHeight: "70vh",
          textAlign: "center",
          background: "rgb(230 232 250 / 57%)",
          backgroundImage: `url(${whatwedosvg3})`,
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          className="HomeHeadings"
          variant="h3"
          fontWeight="fontWeightBold"
          style={{
            paddingTop: "2px",
            color: "var(--primary-color1)",
            fontWeight: "bolder",
            textAlign: "start",
          }}
        >
          📌 TESTIMONIAL
        </Typography>
        <TestimonialCards />
      </Grid> */}
        {/* TESTIMONIAL END */}

        {/* WHY CAPSCODE */}
        <Typography
          className="HomeHeadings"
          variant="h3"
          fontWeight="fontWeightBold"
          style={{
            paddingTop: "2px",
            color: "var(--primary-color1)",
            fontWeight: "bolder",
            background: "#fef3f4",
            backgroundImage: `url(${whatwedosvg5})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            height: "125px",
            marginBottom: "-5px",
          }}
        >
          <BsFillBrightnessHighFill /> Why CapsCode ?
        </Typography>
        <Grid
          container
          style={{
            minHeight: "100vh",
            textAlign: "center",
            background: "rgb(255, 255, 247)",
            backgroundImage: `url(${whatwedosvg4})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Grid item lg={11} md={10} sm={10} xs={12}>
            <h2 style={{ float: "left", paddingLeft: "30px" }}>For Students</h2>
            <div style={{ marginLeft: "20%" }}>
              <SliderCards data={studentdata} />
            </div>
          </Grid>

          <Grid item lg={11} md={10} sm={10} xs={12}>
            <h2 style={{ float: "left", paddingLeft: "30px" }}>For Business</h2>
            <div style={{ marginLeft: "20%" }}>
              <SliderCards data={businessdata} />
            </div>
          </Grid>
        </Grid>
        {/* WHY CAPSCODE ENDS*/}

        {/* INVITE US TO YOUR COLLEGE/SCHOOL */}
        <Typography
          className="HomeHeadings"
          variant="h3"
          fontWeight="fontWeightBold"
          fontSize="2rem"
          style={{
            paddingTop: "2px",
            color: "var(--primary-color1)",
            fontWeight: "bolder",
            backgroundImage: `url(${whatwedosvg7})`,
            backgroundSize: "cover",
            height: "100px",
          }}
        >
          <BsBraces /> Invite us to your School/ College
        </Typography>
        <Grid
          container
          style={{
            minHeight: "70vh",
            textAlign: "center",
            backgroundImage: `url(${whatwedosvg6})`,
            backgroundSize: "cover",
          }}
        >
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <button className="RouteButton" onClick={() => setOpen(true)}>
              Fill a small form and we will contact soon ▶︎
            </button>
            <InviteUsForm open={open} setOpen={setOpen} />

            <div
              style={{
                textAlign: "left",
                padding: "30px",
                fontSize: "0.8rem",
                background: "rgba(255, 255, 255, 0.09)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(1.7px)",
                border: "1px solid rgba(255, 255, 255, 0.36) ",
                margin: "30px",
              }}
            >
              <h3>
                <span role="img" aria-labelledby="coding">
                  👨‍💻
                </span>{" "}
                For Frontend Web Development (HTML5, CSS3, JavaScript, ReactJS,
                Docker, Azure, Hosting etc.) workshop
              </h3>
              <h3>
                <span role="img" aria-labelledby="folder">
                  📁
                </span>{" "}
                For Backend Web Development(NodeJS, ExpressJS, MongoDB, Redis
                etc.) workshop
              </h3>
              <h3>
                <span role="img" aria-labelledby="mic">
                  🎤
                </span>{" "}
                For technical speech
              </h3>
              <h3>
                <span role="img" aria-labelledby="phone">
                  📞
                </span>{" "}
                For career consultation
              </h3>
              <h3>
                <span role="img" aria-labelledby="gem">
                  💎
                </span>{" "}
                Any many more tech related stuffs...
              </h3>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <img
              style={{
                height: "90%",
                width: "80%",
                alignItems: "center",
              }}
              src={require("./Assets/inviteus2.webp")}
              alt="Invite CapsCode to school/college"
            />
          </Grid>
        </Grid>
        {/* INVITE US TO YOUR COLLEGE/SCHOOL ENDS*/}

        {/* HAVE A BUSINESS IDEA */}
        {/* <Typography
        variant="h3"
        fontWeight="fontWeightBold"
        style={{
          // paddingTop: "2px",
          color: "var(--primary-color1)",
          backgroundColor: "rgb(201 255 229 / 43%)",
          fontWeight: "bolder",
          backgroundImage: `url(${whatwedosvg7})`,
          backgroundSize: "cover",
          height: "100px",
        }}
      >
        📌 Have a Business Idea ?
      </Typography>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{
          backgroundColor: "rgb(201 255 229 / 43%)",
          minHeight: "70vh",
        }}
      ></Grid> */}
        {/* HAVE A BUSINESS IDEA ENDS*/}

        {/* EVENTS AT CAPSCODE */}
        <Typography
          className="HomeHeadings"
          variant="h3"
          fontWeight="fontWeightBold"
          style={{
            paddingTop: "2px",
            color: "var(--primary-color1)",
            fontWeight: "bolder",
            backgroundColor: "rgb(255, 255, 243)",
          }}
        >
          <BsFillMicFill /> Events at CapsCode ?
        </Typography>
        <Grid
          container
          style={{
            flexGrow: "1",
            minHeight: "70vh",
            background: "rgb(201 255 229 / 43%)",
            backgroundImage: `url(${whatwedosvg8})`,
            backgroundSize: "cover",
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
                  <div>
                    <Card
                      className={classes.my_upcomings}
                      style={{
                        width: "auto",
                        backgroundColor: `${e.cardColor}`,
                        padding: "15px",
                        borderRadius: "15px",
                        boxShadow: "0 17px 15px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "1rem" }}
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
        {/* EVENTS ENDS */}
      </div>
    </>
  );
}

export default Home;
