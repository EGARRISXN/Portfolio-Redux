import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineHeart, AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (

    <Container fluid className ="footer">

      <Row>
        <Col md="3" className="footer-madewithlove">
          <h3>Made with <AiOutlineHeart /> by Ethan Garrison</h3>
        </Col>

        <Col md="6" className="footer-filler">
        </Col>

        <Col md="3" className="footer-links">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/EGARRISXN" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a href="https://www.linkedin.com/in/ethan-garrison-261ba4a2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a href="https://twitter.com/Ethan_Garrison0" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a href="https://www.instagram.com/egarrisxn/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

    </Container>

  )
}

export default Footer;
