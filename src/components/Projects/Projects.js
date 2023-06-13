import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import PlayerOneReads from "../../Assets/playeronereads.png";
import EventEase from "../../Assets/eventease.png";
import Streamverse from "../../Assets/streamverse.png";

function Projects() {
  return (

    <Container fluid className="project-page">
      <Container>

        <h1 className="project-heading">
          Recent <span className="blue">Projects </span>
        </h1>
        <p>
          Below are a few things I've been working on.
        </p>

        <Row className="project-section">
          <Col md={6} className="project-card">
            <ProjectCard imgPath={PlayerOneReads} isBlog={false} title="Player One Reads" description="Player One Reads is a web application that generates book suggestions based upon a user's video game interests. Once you chose your suggested book, you'll have the option to read or purchase. HAPPY READING!" ghLink="https://github.com/EGARRISXN/Player-One-Reads" appLink="https://egarrisxn.github.io/Player-One-Reads" />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard imgPath={EventEase} isBlog={false} title="Event Ease" description="Event Ease is an event planning web application. It allows users to plan and manage events, keeping track of attendees, RSVPs, and event details. This application is a one stop shop! ENJOY YOUR EVENT!" ghLink="https://github.com/keelyybug/Event-Ease" appLink="https://event-ease.herokuapp.com/" />
          </Col>

          <Col md={6} className="project-card">
              <ProjectCard imgPath={Streamverse} isBlog={false} title="Streamverse" description="The StreamVerse app allows users to access, rate, and add movies to different lists . After login, users can view their bio, saved movie list, and their social feed. WELCOME TO THE STREAMVERSE." ghLink="https://github.com/emilymclean94/movie-nova" appLink="https://streamversee.herokuapp.com/" />
          </Col>
        </Row>

      </Container>
    </Container>

  )
}

export default Projects;
