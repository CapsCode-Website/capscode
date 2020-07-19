import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: 'red',
      marginTop:'60px',
    },
    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'green',
      marginTop:'90px',
    },
    [theme.breakpoints.up('lg')]: {
      // backgroundColor: 'yellow',
      marginTop:'90px',
    },
    
  },
  openings:{
    borderRadius:'15px',
    backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
    border:'4px solid white',
    minHeight:'60vh',
    transition: 'transform .2s',
    "&:hover": {
      // boxShadow: '0 3px 5px 0 rgba(0,0,0,0.08)',
      boxShadow: 'inset -12px -8px 40px #464646',
      transform: 'scale(1.05)',
    },
  },
  openingHeading:{
    borderTopLeftRadius:'11px',
    borderTopRightRadius:'11px',
    backgroundImage: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
    padding:'15px', 
    marginBottom:'3px'
  }
}))

export default function Career(){
  localStorage.setItem('currentTab', 2);
  const classes = useStyles();
        return(
          // backgroundImage: `url(${Wave})`,
          <Grid className={classes.root} container  style={{ padding:'20px', minHeight: '83.5vh'}}>
            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
              <div className={classes.openingHeading}>
                <Typography >React JS Developer/ Trainer </Typography>
                <Typography>Experience: 0 - 1 yr</Typography>
                <Typography>No. of Openings: 2 </Typography>
                <Typography>Salary: 9000 - 13000/ Month</Typography>
              </div>
              <Divider/>              
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>Must a pasionate developer and a enthuastic learner with egarness to spread knowledge to world.
                Key Requirement:Typescript, Reactjs Basics, React Hooks. Redux/ Context API/ Recoil or any other state management libraries, Any popular reactjs framework,
                Must have done 2-3 realtime projects(please send git repo along with portfolio). Proficiency in graphic design software including Adobe Photoshop, Adobe Illustrator, and  other visual design tools.
                Expert in Git. Debugging knowledge. Knowledge of how to play with ServiceWorker.
              </p>
              <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
              <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>JavaScript Developer/ Trainer </Typography>
              <Typography>Experience: 0 yr</Typography>
              <Typography>No. of Openings: 1 </Typography>
              <Typography>Salary: 7000 - 9000/ Month</Typography>
            </div>
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>
                Should have strong knowledge of HTML5, CSS3. Basic knwledge of JS including Strict mode, Array and its method
                Async Await, Generator Functions, Map and Set, Promises, Arrow functions and other basic stuffs.
                Expresions and operator in JS. Must having knowledge of Classes,JSON (Array and Objects), Objects and Data Structure  in JS
              </p>
              <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
              <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>Node JS Developer/ Trainer </Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
              <Typography>No. of Openings: 1 </Typography>
              <Typography>Salary: 9000 - 12000/ Month</Typography>
            </div>
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>      
                  Creating REST APIs using OpenAPI specification on nodejs
                  Robust test-driven development with automated unit tests and integration tests
                  Creating highly scalable backend, load tested and ready to deploy on the cloud
                  Creating resilient code while using databases such as MongoDB, Elasticsearch, Redis
                  Integrating user interface with various iManage products
                  Excellent knowledge in Nodejs, ES6 , Express, KOA, OpenAPI
                  Excellent knowledge in MongoDB, Elasticsearch, Redis
                  Excellent knowledge in Mocha, Jest, Karma, Selenium, ESLint.
                  Excellent knowledge in consuming and creating Rest APIs.
                  Worked on or used Cloud technologies, like AWS, Google Cloud etc.
                  Worked with Web Workers, Web Sockets, Canvas API, Web Sockets etc.
              </p>
              <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
              <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>Voice/Chat Support</Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
              <Typography>No. of Openings: 1 </Typography>
              <Typography>Salary: 7000 - 10000/ Month</Typography>
             </div> 
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>
                This Opening Only for Graduates and Undergraduate Any Graduate B.com, B.Sc, B.A, BBM, BBA, BE
                and B TECH and Post graduates with Excellent Communication(Hindi and English) can apply. 
              </p>
              <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
              <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
              </div>
            </Grid>


            <Grid xs={12} sm={6} md={6} lg={6} item className={classes.openings}>
            <div className={classes.openingHeading}>
              <Typography>MERN Stack Developer</Typography>
              <Typography>Experience: 0 - 1 yr</Typography>
              <Typography>No. of Openings: 1 </Typography>
              <Typography>Salary: 20000 - 25000/ Month</Typography>
             </div> 
              <Divider/>
              <div style={{padding:'10px'}}>
              <h4>Requirements :</h4>
              <p>
                  We are looking for a MERN Stack developer to join our team at the earliest. In this role, as a Senior Mern Stack Developer, you will be entrusted with developing JavaScript applications using Node.js, Express, React.js, and Mongo DB. Apply now for the role of a Mern Stack Developer at Pattem that’s opening doors for skilled, energetic developers looking for Mern Stack Developer Jobs in Bangalore. If you can help us design and create multiple layers of applications while working cross-functionally across different infrastructures. You would fit perfectly if you love problem-solving, design, and creating quality offerings.

                  Know Your Work:
                  As a MERN Stack Developer, it’s your responsibility to translate storyboards and various use cases to create high-performing apps
                  Write, execute, and maintain clean, reusable and scalable code
                  Integrate our various data storage solutions
                  Ensure the responsiveness and boost the performance of our apps
                  Find and address the various bottlenecks and bug-fixes
                  Help in code automatization
                  Great knowledge in deploying MERN website live.


                  What You Need To Apply:
                  Previous working experience as a MERN stack developer for 3+ years
                  Strong experience with full-stack Javascript framework, Mongo DB, Express, React.JS, Node JS.
                  Self-motivated with the ability to work independently or jointly in a self-directed way.
                  Demonstrated successful development of enterprise-grade web applications
                  Proven analytical and problem-solving capabilities
                  Keen attention to detail
                  Comfortable leading product development
                  Strong work ethic and desire to build industry-leading products
                  Proactive instead of reactive
                  Looking for ways to improve self and projects

              </p>
              <p>send resume at <b>capscode.in@gmail.com</b> mentioning the job title in Subject</p>
              <p><b>NOTE:</b> FLEXIBLE WORKING HOUR WITH NO MINIMUM AND MAXIMUM WORKING TIME.</p>
              </div>
            </Grid>
          </Grid>
        )
}