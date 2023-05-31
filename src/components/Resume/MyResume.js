import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import { FcDownload } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/RESUME2023.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyResume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (

      <Container fluid className="resume-page">

        <Row className="resume-download">
          <Button href={pdf} target="_blank">
            <FcDownload /> Download Resume
          </Button>
        </Row>
        
        <Row className="resume">
          <Document file={pdf} className="resume-document d-flex">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

      </Container>

  )
}

export default MyResume;
