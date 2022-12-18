import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Loader from "../Loading/Loader";
import SEO from "../../SEO";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: 'red',
      marginTop: "60px",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: 'green',
      marginTop: "90px",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: 'yellow',
      marginTop: "70px",
    },
  },

  about: {
    paddingLeft: "30px",
    color: "#4a148c",
  },
  eachAbout: {
    paddingBottom: "20px",
  },

  team: {
    flexGrow: 1,
    padding: "15px",
    justify: "space-between",
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
  },
  avatarCard: {
    justify: "space-around",
    alignItems: "center",
    minHeight: "30em",
    padding: "5px",
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    // backgroundColor: 'lightGrey',
    borderRadius: "17px",
    border: "9px solid white",
    // boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)',
    transition: "transform .2s",
    "&:hover": {
      // boxShadow: '0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      boxShadow: "0 20px 50px rgba(240, 46, 170, 0.7)",
      transform: "scale(1.09)",
    },
  },
}));

export default function Aboutus() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [About, setAbout] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom

    fetch("https://rahulnag.github.io/capscodefiles/About.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAbout(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  localStorage.setItem("currentTab", 4);
  const classes = useStyles();

  if (error) {
    return (
      <div style={{ paddingTop: "40vh" }}>
        <Loader />
        Error: {error.message} Please check your internet connection
      </div>
    );
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        <SEO
          title="CapsCode - About Us"
          description="Website development in Ranchi, Jharkhand, Learn web development, JavaScript, ReactJS, NodeJS, MongoDB, MERN, HTML, CSS, GitHub, Docker, Web Development Blog"
          name="About CapsCode"
          type="website"
        />
        <Grid
          className={classes.root}
          container
          style={{
            // backgroundColor: "white",
            padding: "20px",
            // minHeight: "91.5vh",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.eachAbout}
          >
            <Typography>
              CapsCode was founded in 3rd Aug, 2020 with a great vision to make
              India ready for future. CapsCode is a Ranchi, Jharkhand based Web
              Development and Technology Consulting Company who
              <li>Teaches coding</li>
              <li>
                Develop websites,SEO, FREE web hosting & service, logo
                designing, graphics designing and a lot more
              </li>
              <li>Provide consultation</li>
              <li>24/7 availability to solve your queries</li>
              <li>Provide 1:1 consultation</li>
              <li>Mentorship</li>
            </Typography>
            <Typography>
              At CapsCode we have highly qualified with 6+ yrs IT Industrial
              experienced developers who are specialized in Website Design &
              Development, Web technologies, Web Security etc. At CapsCode we
              understand your requirements and get back to you with complete
              idea and solutions.
            </Typography>
            <br />
            <Typography>
              If you have any query, just shootout your question, query, concern
              in whats app or email and we will be happy to reply you back
              withing 1 hr.
            </Typography>
          </Grid>
        </Grid>

        <Divider />
        <h2 style={{ textAlign: "center" }}>OUR TEAM</h2>
        <Grid container className={classes.team}>
          {About.map((a, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
                className={classes.avatarCard}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="capscode team avatar"
                      className={classes.avatar}
                    >
                      {a.avatarShortName}
                    </Avatar>
                  }
                  title={a.teamMemberName}
                  subheader={a.designation}
                />
                <CardMedia
                  className={classes.media}
                  title="CAPSCODE Team Member"
                  image={a.teamMemberImage}
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {a.desc}
                  </Typography>
                  <br />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>{`Expert IN: ${a.expertIn}`}</b>
                  </Typography>
                </CardContent>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  }
}
