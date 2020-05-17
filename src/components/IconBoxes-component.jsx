import React from "react";
import "materialize-css";
import { Container, Row, Card, Section, Col } from "react-materialize";

export const IconBoxes = () => {
  return (
    <Section className="center section-icons">
      <Container>
        <h4 className="align-center">Nuestros Servicios</h4>
        <Row>
          <Col s={12} m={4}>
            <Card>
              <i className="material-icons  large teal-text">ac_unit</i>
              <h4>Instalaciones</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card>
              <i className="material-icons  large teal-text">shopping_cart</i>
              <h4>Ventas</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card>
              <i className="material-icons  large teal-text">build</i>
              <h4>Reparación</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
