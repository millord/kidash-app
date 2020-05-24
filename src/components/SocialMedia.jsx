import React from "react";
import "materialize-css";
import { Link } from "react-router-dom";
import { Section, Container, Row, Col } from "react-materialize";
import "../components/styles.css";

export const SocialMedia = () => {
  const mystyle = {
    margin: "5px 15px",
  };
  return (
    <Section className="blue darken-3 white-text center">
      <Container>
        <Row>
          <Col s={12}>
            <h5>Sigue a Kidash S.R.L</h5>
            <p>Siguenos en las redes sociales para ofertas y especiales</p>
            <Link to="#">
              <i
                style={mystyle}
                className="fa fa-facebook fa-lg white-text"
              ></i>
            </Link>
            <Link to="#">
              <i style={mystyle} className="fa fa-twitter fa-lg white-text"></i>
            </Link>
            <Link to="#">
              <i
                style={mystyle}
                className="fa fa-linkedin fa-lg white-text"
              ></i>
            </Link>
            <Link to="#">
              <i
                style={mystyle}
                className="fa fa-google-plus fa-lg white-text"
              ></i>
            </Link>
            <Link to="#">
              <i
                style={mystyle}
                className="fa fa-pinterest fa-lg white-text"
              ></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
