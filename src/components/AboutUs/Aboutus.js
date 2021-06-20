import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import 'animate.css/animate.css' ;


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
        marginTop:'70px',
      },
    },
    
    about:{
      paddingLeft:'30px',
      animation: 'headShake',
      animationDuration: '2s',
      color: '#4a148c'
    },
    eachAbout:{
      paddingBottom:'20px',
      animation: 'headShake',
      animationDuration: '3s'
      
    },
  
    team:{
      flexGrow: 1,
      padding: '15px',
      justify: 'space-between',
    },
    avatar: {
      backgroundColor: red[500],
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      borderRadius:'10px'
    },
    avatarCard: {
    justify: 'space-around',
    alignItems:'center',
    minHeight:'30em',
    padding: '5px',
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    // backgroundColor: 'lightGrey',
    borderRadius: '17px',
    border: '9px solid white',
    // boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)',
    transition: 'transform .2s',
    "&:hover": {
      // boxShadow: '0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      boxShadow: '0 20px 50px rgba(240, 46, 170, 0.7)',
      transform: 'scale(1.09)',
    },
    }
  

  }));

export default function Aboutus(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [About, setAbout] = useState([]);
  


  useEffect(() => {
    window.scrollTo(0,0); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom

    fetch("https://rahulnag.github.io/capscodefiles/About.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAbout(result);
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  

  localStorage.setItem('currentTab', 4);
    const classes = useStyles();




    if (error) {
      return <div style={{paddingTop:'40vh'}}>Error: {error.message} Please check your internet connection</div>;
    } else if (!isLoaded) {
      return <div style={{paddingTop:'40vh'}}>Loading...Please wait</div>;
    } else {
      
        return( 
          <>
          <Grid className={classes.root} container style={{backgroundColor:'white', padding:'20px', minHeight: '91.5vh'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.eachAbout}>
              <Typography align='left' variant='h5'>
                1: Our Vision and misssion !
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                a) Make INDIA future ready by providing best skills and creative brains.
              </Typography>
              <Typography align='left'  variant='subtitle2'className={classes.about} >
                b) We provide mentorship, 24/7/365 support in choosing correct path for your future. 
              </Typography>
             
            </Grid>
            



            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.eachAbout}>
              <Typography align='left' variant='h5'>
                2: Who we are ?
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                We are a group of professionals with emmense working experience and knowledge in terns of technical and non- technical terms.
              </Typography>
             
            </Grid>



            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.eachAbout}>
              <Typography align='left'  variant='h5'>
                3: What we do ?
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                a) We teach CODE and makae you ready for future with the power to build your websites, Apps, VR's, AI, ML, etc.
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                b) we conduxt seminars, webinars, workshops in different regions of Ranchi and other places too.
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                c) We teach and guide the students of Rural areas for free of cost, as each child is GOD GIFTED with differnt brain power So money should not be the constraint.
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                d) We provide scholarship to the deserving students.
              </Typography>
            </Grid>



            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.eachAbout}>
              <Typography align='left' variant='h5'>
               4: More Info !
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                a) We conduct online as well as offline classes with live projects and on completion you will earn a CERTIFICATE
              </Typography>  
              <Typography align='left' variant='subtitle2' className={classes.about}>
                b) We build SEO enabled websites for out clients/ Customers and also provide maintainence to them.
              </Typography>
            </Grid>



            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.eachAbout}>
              <Typography align='left' variant='h5'>
                5: Who can join CapsCode?
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                a) Anyone having interest in learning code, website building, app building, AI, ML, Python, SQL, DataStructure, Algorithm, learning new technologies in market and many more can join us.
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                (no minimum and maximum age criteria)
              </Typography>
              <Typography align='left' variant='subtitle2' className={classes.about}>
                b) Anyone who wants to learn Digital Marketting, SWO, MS Office, SAP etc can also join us.
              </Typography>
            </Grid>



            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.eachAbout}>
              <Typography align='left' variant='h5'>
                6: Our Availability !
              </Typography>
              <Typography align='left' variant='subtitle2' className= {classes.about}>
                We are available 24/7 to support you with all your doubt related to coding, future, mentorship etc.
                Just shootout the question, query, concern in whats app or email and we will be happy to reply you back withing 1 hr.
              </Typography>
            </Grid>

          </Grid>
          
          <Divider/>
          <h2 style={{textAlign:'center'}}>TEAM</h2>
          <Grid container  className={classes.team} style={{backgroundColor:'white'}}>
            {
              About.map((a,i)=>{
                return(
                  <Grid key={i} item xs={12} sm={6} md={3} lg={3} className={classes.avatarCard}>
                  <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {a.avatarShortName}
                    </Avatar>
                  
                  }
                  title={a.teamMemberName}
                  subheader={a.designation}
                />
                <CardMedia 
                  className={classes.media}
                  title="CAPSCODE Team Member"
                  // image={require(`${a.teamMemberImage}`)}
                  image={a.teamMemberImage}
                />
              
              
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {a.desc}
                </Typography>
                <br/>
              
              {/* <Divider/> */}
              <Typography variant="body2" color="textSecondary" component="p" ><b>
                  {`Expert IN: ${a.expertIn}`}
                  </b>
              </Typography>
              
              </CardContent>
              
             
              {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions> */}
                </Grid>
                )
              })
            }
            </Grid>
        </>
        )
    }
}