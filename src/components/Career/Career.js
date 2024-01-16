import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import devto from "./devto.svg";
import hashnode from "./hashnode.webp";
import insta from "./instagram.webp";
import axios from "axios";
import BlogCards from "./BlogCards";
import Loader from "../Loading/Loader";
import allblogdata from "../../blogfiles/allblog.json";
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,

    paddingTop: "90px",
    [theme.breakpoints.down("sm")]: {
      paddginTop: "60px",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: 'green',
      paddginTop: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: 'yellow',
      paddginTop: "80px",
    },
  },
  openings: {
    borderRadius: "15px",
    backgroundImage:
      "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
    border: "6px solid white",
    minHeight: "60vh",
    transition: "transform .2s",
  },
  openingHeading: {
    borderTopLeftRadius: "11px",
    borderTopRightRadius: "11px",
    backgroundImage: "linear-gradient(to left, #FFFCB2, #FFFCB2)",
    padding: "15px",
    marginBottom: "3px",
  },
  openingHeading_ch: {
    borderTopLeftRadius: "11px",
    borderTopRightRadius: "11px",
    backgroundImage: "linear-gradient(315deg, #3ee577 0%, #42fcdb 74%)",
    padding: "15px",
    marginBottom: "3px",
  },

  blogs: {
    padding: "10px",
    margin: "10px",
    // boxShadow:"0 15px 50px rgba(0,0,0,0.4)",
    borderRadius: "10px",
    // background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(5px)",
    backfaceVisibility: "hidden",
    borderTop: "1.5px solid rgba(255,255,255,0.4)",
    borderLeft: "1px solid rgba(255,255,255,0.4)",
    borderRight: "1px solid rgba(255,255,255,0.2)",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    opacity: "12px",

    display: "flex",
    flexDirection: "row",
  },
  text: {
    // margin: "20px",
    marginLeft: "8px",
  },
  links: {
    textDecoration: "none",
  },
  BlogCard: {},
}));

function Career({ setSelectedIndex }) {
  const [data, setData] = React.useState(allblogdata);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom
  }, []);

  //commeneted before making md file local
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://raw.githubusercontent.com/CapsCode-Website/blogfiles/master/allblog.json",
  //   })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const classes = useStyles();
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.root}
      >
        <Grid item lg={4} md={4} sm={4} xs={12} className={classes.BlogCard}>
          <a className={classes.links} href="https://dev.to/capscode">
            <Paper className={classes.blogs}>
              <img
                src={devto}
                alt="dev.to"
                style={{ height: "50px", width: "50px" }}
              />
              <div>
                <h4 className={classes.text}>
                  Dev.to{" "}
                  <span style={{ color: "darkgrey" }}>
                    (Total View : 60K+)
                  </span>
                </h4>
              </div>
            </Paper>
          </a>
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12} className={classes.BlogCard}>
          <a className={classes.links} href="https://capscode.hashnode.dev/">
            <Paper className={classes.blogs}>
              <img
                src={hashnode}
                alt="hashnode"
                style={{ height: "50px", width: "50px" }}
              />
              <div>
                <h4 className={classes.text}>
                  Hashnode{" "}
                  <span style={{ color: "darkgrey" }}>
                    (Total Views: 10.5K+)
                  </span>
                </h4>
              </div>
            </Paper>
          </a>
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12} className={classes.BlogCard}>
          <a
            className={classes.links}
            href="https://www.instagram.com/capscode/"
          >
            <Paper className={classes.blogs}>
              <img
                src={insta}
                alt="instagram"
                style={{ height: "50px", width: "50px" }}
              />
              <div>
                <h4 className={classes.text}>Instagram</h4>
              </div>
            </Paper>
          </a>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        align="flex-start"
        style={{ height: "auto" }}
      >
        {data.length > 0 ? (
          <BlogCards
            data={data}
            page={page}
            setPage={setPage}
            setSelectedIndex={setSelectedIndex}
          />
        ) : (
          <h3>
            <Loader />
          </h3>
        )}
      </Grid>
    </div>
    // backgroundImage: `url(${Wave})`,
    // <Grid className={classes.root} container  style={{ padding:'20px', minHeight: '83.5vh'}}>

    //     <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
    //     <div className={classes.openingHeading_ch}>
    //       <Typography >Campus Heros(for both School & College students)</Typography>
    //       <Typography>Experience: 0 yr(not required)</Typography>
    //       <Typography>No. of Openings: 20 </Typography>
    //       <Typography>Last Date: 30th Jan 2021</Typography>
    //     </div>
    //     <Divider/>
    //     <div style={{padding:'10px'}}>
    //     <h4>Requirements :</h4>
    //     <p>You must be passionate to help others, to share knowledge, to share skills etc.
    //     Students having strong interpersonal skills, leadership qualities
    //     and a zeal to learn new things.
    //     </p>
    //     <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeek5ZARTiBmnf0rioSs_91GOdR7q9uyn1eMuymW8nWAN7lWQ/viewform?usp=sf_link" style={{textDecoration: 'none'}}><b>CLICK HERE TO APPLY</b></a>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
    //     <div className={classes.openingHeading}>
    //       <Typography >React JS Developer/ Trainer </Typography>
    //       <Typography>Experience: 0 - 1 yr</Typography>
    //       <Typography>No. of Openings: 2 </Typography>
    //       <Typography>Salary: Not Disclosed</Typography>
    //     </div>
    //     <Divider/>
    //     <div style={{padding:'10px'}}>
    //     <h4>Requirements :</h4>
    //     <p>Must a pasionate developer and a enthuastic learner with egarness to spread knowledge to world.
    //       Key Requirement:Typescript, Reactjs Basics, React Hooks. Redux/ Context API/ Recoil or any other state management libraries, Any popular reactjs framework,
    //       Must have done 2-3 realtime projects(please send git repo along with portfolio). Proficiency in graphic design software including Adobe Photoshop, Adobe Illustrator, and  other visual design tools.
    //       Expert in Git. Debugging knowledge. Knowledge of how to play with ServiceWorker.
    //     </p>
    //     <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
    //     <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
    //   <div className={classes.openingHeading}>
    //     <Typography>JavaScript Developer/ Trainer </Typography>
    //     <Typography>Experience: 0 yr</Typography>
    //     <Typography>No. of Openings: 1 </Typography>
    //     <Typography>Salary: Not Disclosed</Typography>
    //   </div>
    //     <Divider/>
    //     <div style={{padding:'10px'}}>
    //     <h4>Requirements :</h4>
    //     <p>
    //       Should have strong knowledge of HTML5, CSS3. Basic knwledge of JS including Strict mode, Array and its method
    //       Async Await, Generator Functions, Map and Set, Promises, Arrow functions and other basic stuffs.
    //       Expresions and operator in JS. Must having knowledge of Classes,JSON (Array and Objects), Objects and Data Structure  in JS
    //     </p>
    //     <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
    //     <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
    //   <div className={classes.openingHeading}>
    //     <Typography>Node JS Developer/ Trainer </Typography>
    //     <Typography>Experience: 0 - 1 yr</Typography>
    //     <Typography>No. of Openings: 1 </Typography>
    //     <Typography>Salary: Not Disclosed</Typography>
    //   </div>
    //     <Divider/>
    //     <div style={{padding:'10px'}}>
    //     <h4>Requirements :</h4>
    //     <p>
    //         Creating REST APIs using OpenAPI specification on nodejs
    //         Robust test-driven development with automated unit tests and integration tests
    //         Creating highly scalable backend, load tested and ready to deploy on the cloud
    //         Creating resilient code while using databases such as MongoDB, Elasticsearch, Redis
    //         Integrating user interface with various iManage products
    //         Excellent knowledge in Nodejs, ES6 , Express, KOA, OpenAPI
    //         Excellent knowledge in MongoDB, Elasticsearch, Redis
    //         Excellent knowledge in Mocha, Jest, Karma, Selenium, ESLint.
    //         Excellent knowledge in consuming and creating Rest APIs.
    //         Worked on or used Cloud technologies, like AWS, Google Cloud etc.
    //         Worked with Web Workers, Web Sockets, Canvas API, Web Sockets etc.
    //     </p>
    //     <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
    //     <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
    //   <div className={classes.openingHeading}>
    //     <Typography>Voice/Chat Support</Typography>
    //     <Typography>Experience: 0 - 1 yr</Typography>
    //     <Typography>No. of Openings: 1 </Typography>
    //     <Typography>Salary: Not Disclosed</Typography>
    //    </div>
    //     <Divider/>
    //     <div style={{padding:'10px'}}>
    //     <h4>Requirements :</h4>
    //     <p>
    //       This Opening Only for Graduates and Undergraduate Any Graduate B.com, B.Sc, B.A, BBM, BBA, BE
    //       and B TECH and Post graduates with Excellent Communication(Hindi and English) can apply.
    //     </p>
    //     <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
    //     <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
    //   <div className={classes.openingHeading}>
    //     <Typography>MERN Stack Developer</Typography>
    //     <Typography>Experience: 0 - 1 yr</Typography>
    //     <Typography>No. of Openings: 1 </Typography>
    //     <Typography>Salary: Not Disclosed</Typography>
    //    </div>
    //     <Divider/>
    //     <div style={{padding:'10px'}}>
    //     <h4>Requirements :</h4>
    //     <p>
    //         We are looking for a MERN Stack developer to join our team at the earliest. In this role, as a Senior Mern Stack Developer, you will be entrusted with developing JavaScript applications using Node.js, Express, React.js, and Mongo DB. Apply now for the role of a Mern Stack Developer at Pattem that’s opening doors for skilled, energetic developers looking for Mern Stack Developer Jobs in Bangalore. If you can help us design and create multiple layers of applications while working cross-functionally across different infrastructures. You would fit perfectly if you love problem-solving, design, and creating quality offerings.

    //         Know Your Work:
    //         As a MERN Stack Developer, it’s your responsibility to translate storyboards and various use cases to create high-performing apps
    //         Write, execute, and maintain clean, reusable and scalable code
    //         Integrate our various data storage solutions
    //         Ensure the responsiveness and boost the performance of our apps
    //         Find and address the various bottlenecks and bug-fixes
    //         Help in code automatization
    //         Great knowledge in deploying MERN website live.

    //         What You Need To Apply:
    //         Previous working experience as a MERN stack developer for 3+ years
    //         Strong experience with full-stack Javascript framework, Mongo DB, Express, React.JS, Node JS.
    //         Self-motivated with the ability to work independently or jointly in a self-directed way.
    //         Demonstrated successful development of enterprise-grade web applications
    //         Proven analytical and problem-solving capabilities
    //         Keen attention to detail
    //         Comfortable leading product development
    //         Strong work ethic and desire to build industry-leading products
    //         Proactive instead of reactive
    //         Looking for ways to improve self and projects

    //     </p>
    //     <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
    //     <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
    //     </div>
    //   </Grid>
    // </Grid>
  );
}
export default React.memo(Career);
