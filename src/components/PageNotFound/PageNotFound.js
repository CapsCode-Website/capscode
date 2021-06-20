import React, { useEffect } from 'react'
import "../PageNotFound/style.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import pageNotFound from './pagenotfound.webp'
import { Paper } from '@material-ui/core';
import back from './back.png'


const styles={
    resources:{
        margin:'10px',
        height:'150px', 
        // width:'100%',
        // boxShadow:"0 15px 50px rgba(0,0,0,0.5)",
        borderRadius:"10px",
        background:"rgba(255,255,255,0.4)",
        backdropFilter:"blur(5px)",
        backfaceVisibility:"hidden",
        borderTop:"1px solid rgba(255,255,255,0.4)",
        borderLeft:"1px solid rgba(255,255,255,0.4)",
        borderRight:"1px solid rgba(255,255,255,0.2)",
        borderBottom:"1px solid rgba(255,255,255,0.2)",
    }
}

let Resources = (props)=>{
    return (
        <div key={props.ke} className="res" style={styles.resources}>{props.key}</div>
    )
}

const resources=[
    {
        'id':'1',
        'resourceName': '',
        'resourceLink': '',
    },
    {
        'id':'2',
        'resourceName': '',
        'resourceLink': '',
    }
]




function PageNotFound(){
    useEffect(
        ()=>{
            window.scrollTo(0,0); //if we remove this then -- if we are in home page bottom and suddenly we moved to servoces page then services page will also start from bottom
        }
    ,[])
    
        return(
            <>
            <Grid container style={{backgroundColor: '#8EC5FC', backgroundImage: 'linear-gradient(352deg, #8EC5FC 16%, #E0C3FC 38%, #fef3f4 71%'}}>
                <Grid item lg={7} md={8} sm={12} xs={12} style={{marginTop:'90px',height:'80vh',backgroundImage:`url(${pageNotFound})`,backgroundPosition: 'top',backgroundRepeat: 'no-repeat'}}>
                </Grid>

                <Grid item lg={5} md={5} sm={12} xs={12} style={{padding:'20px',marginTop:'90px',height:'100vh', backgroundImage:`url(${back})`,backgroundRepeat: 'no-repeat'}}>
                    <Link to='/services' style={{textDecoration:'none'}}><div style={{marginTop:'10px', fontWeight:'700',padding:'12px',boxShadow:'6px 10px 21px -7px rgba(0,0,0,0.51)', textAlign:'center', borderRadius:'30px', background:'#F7DAE4', color:'#9996F0'}}>DO YOU NEED A WEBSITE WITH FREE HOSTING ?</div></Link>
                    <h3>Some of resources from CapsCode</h3>
                    {
                        resources.map((r,i)=>{
                            {console.log(r.id)}
                            return (<> <Resources ke={i} /> <br/> </>)
                        })
                    }

                </Grid>
            </Grid>
            </>
        )
    }

export default PageNotFound