import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

  class Share extends React.Component{
    

      render(){
          return(
            <div className="social-container">
            <a
            href="https://www.facebook.com/capscode.in/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com/capscode.in" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/capscode.in"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/capscode.in"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="whatsapp social"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          </div>
          )
      }
  }

  export default Share;