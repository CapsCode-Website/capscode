import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGooglePlus,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

class Share extends React.Component {
  render() {
    return (
      <div className="social-container">
        <a
          href="https://www.facebook.com/capscode.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=capscode.in@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gmail social"
        >
          <FontAwesomeIcon icon={faGooglePlus} size="2x" />
        </a>

        <a
          href="https://www.twitter.com/capscodeindia"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a
          href="https://www.linkedin.com/in/capscode"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          href="https://www.instagram.com/capscode"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <a
          href="https://telegram.me/capscode"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram social"
        >
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>

        <a
          href="https://github.com/capscode"
          target="_blank"
          rel="noopener noreferrer"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
        </a>

        <a
          href="https://chat.whatsapp.com/LkNgfPA8h4gBR6EFCHSUoY"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp social"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    );
  }
}

export default Share;
