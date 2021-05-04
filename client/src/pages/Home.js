import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="col-lg-8 col-md-9 col-sm-12 content-box">
          <h1 class="text-success">About Me</h1>

          <img class="img-fluid float-box profile-image" src="./assets/images/profile.jfif" alt="" />
          <p>
            I'm a software developer with experience in a wide variety of languages and tools. I am most experiecned with back-end languages and database interaction, and am now engaged in learning front-end development. I excel at projects with close collaboration and in mentorship roles
            </p>
          <p>
            Find my full resume <a href="./assets/Resume - Todd Malone.pdf">here</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
