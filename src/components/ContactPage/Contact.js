import React ,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as style from './contact.css'
import img from './contact.png'
import { red } from '@material-ui/core/colors';
import { useForm, ValidationError } from '@formspree/react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Contact=()=>{
  useEffect(()=>{
    localStorage.setItem('currentTab', 5);
  },[])
    // super(props)
    
    // this.focusRef = React.createRef();

    const [state, handleSubmit] = useForm("xknkjlyr");
    if (state.succeeded) {
        return (
          <>
            <Grid container justify="center"alignItems="center" style={{height:'100vh', width:'100vw'}}>
              {/* <Paper style={{height:"30%", width:"50%"}}> */}
                <h3>Thanks for the submission</h3>
              {/* </Paper> */}
              <br/>
              <Grid item>
                <Link to='/' style={{ textDecoration: 'none' }}><div style={{ fontWeight: '700', padding: '12px', boxShadow: '6px 10px 21px -7px rgba(0,0,0,0.51)', textAlign: 'center', borderRadius: '30px', background: '#F7DAE4', color: '#535C68' }}>GO BACK TO HOME</div></Link>
              </Grid>
            </Grid>
          </>
        );
    }

  // componentDidUpdate(){
  //   window.scrollTo(0,0); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom
  // }


  return(
    <Grid container style={{height: '100vh', paddingTop: '90px', width:"100%", backgroundColor: '#8EC5FC',
    backgroundImage: 'linear-gradient(352deg, #8EC5FC 16%, #E0C3FC 38%, #fef3f4 71%'
    }} >
       <Grid  id="formpage" item lg={7} md={7} sm={12} xs={12} 
        container
        direction="row"
        justify="center"
        alignItems="center">
          {/* {this.state.success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )} */}



      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:*<br/>
          <input
            id="name"
            placeholder="Enter your name"
            required={true}
            type="name" 
            name="name"
            size="40"
            />
        </label>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <br/><br/>
        <label>
          EmailID:*<br/>
          <input 
            id="email"
            placeholder="Enter your email id"
            required={true}
            type="text" 
            name="email"
            size="40"/>
        </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <br/><br/>
        <label>
          Phone No.:<br/>
          <input 
            id="phone"
            placeholder="Enter your phone number"
            type="text"  
            name="phone"
            size="40"/>
        </label>
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
        <br/><br/>
        <label>
          Message:*<br/>
          <textarea 
            id="message"
            placeholder="Enter your message here"
            type="text" 
            required={true}
            rows="8"
            // cols="38"
            name='msg'
            />
          <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
        </label><br/>
        <label>(All * fields are mandatory)</label>
        <br/><br/>

        
        <button type="submit" disabled={state.submitting} style={{borderRadius:'50px', height:'40px', width: '80px', backgroundColor: '#ff9889', border:'0.1px solid red'}}>SUBMIT</button>
      </form> 
      </Grid>

      <Grid item lg={5} md={5} sm={8} xs={8} >
        <img alt='contact_us' style={{paddingTop: '10px',height: '70%', width:'70%' }} src={img} alt="contact"/>
      </Grid>
    </Grid>
  )
  }

  export default Contact;
