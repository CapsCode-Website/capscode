import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "../Loading/Loader";
import CourseForm from "./CourseForm";
import SEO from "../../SEO";
import TabContext from "../../contexts/TabContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minHeight: '100vh',
    margin: "30px",
    marginTop: "98px",
  },
  paper: {
    marginTop: "20px",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    // boxShadow: '0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)',
    transition: "transform .05s",
    "&:hover": {
      // boxShadow: '0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      boxShadow: "0 10px 30px rgba(59, 43, 91, 0.7)",
      transform: "scale(1.02)",
    },
  },
  image: {
    // backgroundColor:'red',
    width: "13em",
    height: "10em",
  },
  img: {
    // backgroundColor:'red',
    padding: "20px",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    minWidth: "100%",
    minHeight: "100%",
  },
}));

const ExpansionPanel = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 10,
    height: 15,
    "&$expanded": {
      minHeight: 15,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function Courses() {
  //added on 05th July:
  const TabContextConsumer = React.useContext(TabContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [CourseFile, setCourseFile] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [subjectRequestedFor, setSubjectRequestedFor] = React.useState("");

  useEffect(() => {
    TabContextConsumer.setValue(1);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom

    fetch("https://capscode-website.github.io/capscodefiles/Courses.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCourseFile(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClickOpen = (s) => {
    setSubjectRequestedFor(s);
    setOpen(true);
  };

  if (error) {
    return (
      <div style={{ paddingTop: "40vh" }}>
        <Loader />
        Error : {error.message} (Check Internet Connection Once)
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div style={{ paddingTop: "40vh" }}>
        <Loader />
        Loading...Please wait
      </div>
    );
  } else {
    return (
      <>
        <SEO
          title="CapsCode - Courses"
          description="Learn html, css, javascript, reactjs, nodejs, expressjs, mongodb, docker, github, web development, programming etc."
          name="CapsCode Courses"
          type="website"
        />

        <div className={classes.root}>
          <CourseForm
            open={open}
            setOpen={setOpen}
            subjectRequestedFor={subjectRequestedFor}
          />
          <CssBaseline />
          <div style={{ color: "#535C68", textAlign: "center" }}>
            <Typography variant="h4">
              <span style={{ fontWeight: "bolder" }}> WE TEACH YOU LIVE</span>{" "}
              &#128994;
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              ONCE YOU TOOK UP ANY OF THE BELOW COURSES OUR TEAM WILL CONTACT
              YOU TO CONFIRM YOU AVAILABILTY
            </Typography>
          </div>
          {CourseFile.map((c, i) => {
            return (
              <div key={i} data-aos="zoom-in">
                <Paper className={classes.paper}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                      {/* below commented code is the one when the image was used locally */}
                      {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="course image" src={require(`${c.image}`)} />
            </ButtonBase> */}
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt={c.courseName}
                          src={c.image}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm={6} md={9} container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            style={{ fontWeight: "bolder", fontSize: "2em" }}
                          >
                            {c.courseName}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {c.courseDescrption}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Course Duration: {c.courseDuration}
                          </Typography>
                        </Grid>
                        <Grid item>
                          {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Click to get syllabus
              </Typography> */}
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          style={{
                            textAlign: "right",
                            fontSize: "22px",
                            fontWeight: "bolder",
                          }}
                        >
                          {c.coursePrice}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          style={{
                            background: "#fff6f6",
                            padding: "1px 9px 1px 9px",
                            borderRadius: "7px",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            onClick={() => handleClickOpen(c.courseName)}
                            style={{
                              cursor: "pointer",
                              textDecoration: "none",
                              color: "#ff6700",
                            }}
                          >
                            Click To Enroll
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <ExpansionPanel
                    expanded={expanded === i}
                    onChange={handleChange(i)}
                  >
                    <ExpansionPanelSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        style={{
                          marginBottom: "12px",
                          textAlign: "center",
                          color: "grey",
                        }}
                      >
                        <b>Click To View Syllabus</b>
                      </Typography>
                      <ExpandMoreIcon />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {c.syllabus.map((c, i) => {
                          return <Typography key={i}>{c}</Typography>;
                        })}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Paper>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
