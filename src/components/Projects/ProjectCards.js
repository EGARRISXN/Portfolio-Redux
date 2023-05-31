import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (

    <Card className="project-card-view">

      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button href={props.ghLink} target="_blank">
            <BsGithub /> GitHub
          </Button>
          {"\n"}
          <Button href={props.appLink} target="_blank">
            <CgWebsite /> Application
          </Button>
        </Card.Body>

    </Card>

  )
}
export default ProjectCards;
