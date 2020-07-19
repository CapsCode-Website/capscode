import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

  class Share extends React.Component{
    

      render(){
          return(
            <div className="social-container">
            <a
            href="https://www.facebook.com/capscode.in/"
            target="_blank"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>


          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=capscode.in@gmail.com"
            target="_blank"
            className="gmail social"
          >
            <FontAwesomeIcon icon={faGooglePlus} size="2x" />
          </a>



          <a 
          href="https://www.twitter.com/capscode.in" 
          target="_blank"
          className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
         
          <a
            href="https://www.linkedin.com/in/capscode-in-6427331b2"
            target="_blank"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://www.instagram.com/capscode.in"
            target="_blank"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>


          <a
            href="https://chat.whatsapp.com/LkNgfPA8h4gBR6EFCHSUoY"
            target="_blank"
            className="whatsapp social"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          </div>
          )
      }
  }

  export default Share;