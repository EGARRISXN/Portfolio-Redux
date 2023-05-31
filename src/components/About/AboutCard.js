import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (

    <Card className="about-card">
      <Card.Body>

          <p>
            My name is <span className="blue">Ethan Garrison </span> and I currently reside in <span className="blue"> Orlando, Florida</span>.
            <br />
            I'm currently finishing up my <span className="blue"> Full-Stack Web Development Program </span> with the <span className="blue"> University of Central Florida</span>.
            <br />
            <br />
            Apart from development, here are some of my other <span className="blue">loves</span> in life:
            <br />
            <span className="blue">Family</span> | <span className="blue"> Traveling </span> | <span className="blue">Music </span> | <span className="blue"> Hockey </span>
          </p>

      </Card.Body>
    </Card>

  )
}

export default AboutCard;
