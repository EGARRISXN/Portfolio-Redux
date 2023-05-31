import React from "react";
import { Container, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  return (

    <Container fluid className="about-page">
      <Container>

        <Col className="about-heading" md="12">
          <h1>
            A Little <span className="blue"> About Me </span>
          </h1>
          <Aboutcard />
        </Col>

        <h1 className="tech-heading">
          <span className="blue"> Technologies </span> I Use
        </h1>
        <Techstack />

        <h1 className="tech-heading">
          <span className="blue"> Tools </span> I use
        </h1>
        <Toolstack />

        <Github />

      </Container>
    </Container>

  )
}

export default About;
