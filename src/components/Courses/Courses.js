import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
// import CourseFile from './Courses.json';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withRouter} from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    margin:'30px',
    marginTop: '90px',
  },
  paper: {
    marginTop: '20px',
    borderRadius:'10px',
    padding: '20px',
    width:'100%',
    // boxShadow: '0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)',
    transition: 'transform .05s',
    "&:hover": {
      // boxShadow: '0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      boxShadow: '0 20px 40px rgba(59, 43, 91, 0.7)',
      transform: 'scale(1.03)',
    },
  },
  image: {
    // backgroundColor:'red', 
    width: '13em',
    height: '10em',
  },
  img: {
    // backgroundColor:'red',
    padding: '20px',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    minHeight: '100%'
    
  },
}));

const ExpansionPanel = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 10,
    height: 15,
    '&$expanded': {
      minHeight: 15,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
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
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [CourseFile, setCourseFile] = useState([]);



  useEffect(() => {
      fetch("https://rahulnag.github.io/capscodefiles/Courses.json")
        .then(res => res.json())
        .then(
          (result) => {
            // console.log(".........."+result)
            setIsLoaded(true);
            setCourseFile(result);
            
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])







  localStorage.setItem('currentTab', 1);
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }


  window.addEventListener("storage",(e) => {
    // console.log("ccccccoooooouuuuuurrs"+e.newValue)
    // localStorage.setItem('currentTab', e.newValue);
  //  handleChange(null, e.newValue);  
  });
  




  if (error) {
    return <div style={{paddingTop:'40vh'}}>Error : {error.message} (Check Internet Connection Once)</div>;
  } else if (!isLoaded) {
    return <div style={{paddingTop:'40vh'}}>Loading...Please wait</div>;
  } else {
    



  return (

    <div className={classes.root}>
      {
      CourseFile.map((c, i)=> {
        return(
          <div key={i} data-aos="fade-down-right">
        <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            {/* below commented code is the one when the image was used locally */}
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="course image" src={require(`${c.image}`)} />
            </ButtonBase> */}
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="course image" src={c.image}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={6} md={9} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {c.courseName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {c.courseDescrption}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {c.courseDuration}
                </Typography>
              </Grid>
              <Grid item>
                {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Click to get syllabus
              </Typography> */}


              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{c.coursePrice}</Typography>
            </Grid>
          </Grid>
          
        </Grid>
        <ExpansionPanel expanded={expanded === i} onChange={handleChange(i)}>
              <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography style={{marginBottom:'12px',textAlign:'center', color:'grey'}}><b>Click to get syllabus</b></Typography>
                <ExpandMoreIcon/>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {
                    c.syllabus.map((c,i) => {
                      return (
                      <Typography key={i}>
                        {c}
                      </Typography>
                      )
                    })
                  }
                </Typography>
              </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
      </div>
        )
      })
      }
    </div>
  );
}
}