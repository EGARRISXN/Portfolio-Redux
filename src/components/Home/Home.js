import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import myPhoto from "../../Assets/myphoto.png";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";

function Home() {
  return (

    <section>

      <Container fluid className="home-section" id="home">
        <Container className="home-content">

          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hey There! <span className="wave">👋</span>
              </h1>
              <h1 className="heading-name">
                I'm <span className="main-name"> Ethan Garrison</span>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <br />
            </Col>
            <Col md={5}>
              <img
                src={myPhoto}
                alt="MyPhoto"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </Col>
          </Row>

        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
        <Container>

          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.5em" }}>
              ALLOW ME TO <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am on the pursuit of happiness with overwhelming excitement for
              the future to come. 😃
              <br />
              My field of interests in building new{" "}
              <span className="blue"> Web Technologies and Applications</span>,
              along with areas related to <span className="blue"> Design </span>
              .
              <br />
              When possible, I try to apply my passion for developing with{" "}
              <span className="blue"> Node.js </span> and{" "}
              <span className="blue">
                Javascript Libraries and Frameworks{" "}
              </span>
              like <span className="blue"> React.js </span>.
            </p>
          </Col>

          <Col md={12} className="home-about-social">
            <h1>YOU CAN <span className="blue"> FIND </span> ME HERE</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EGARRISXN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ethan-garrison-261ba4a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/Ethan_Garrison0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/egarrisxn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          
        </Container>
      </Container>
    </section>
  );
}

export default Home;