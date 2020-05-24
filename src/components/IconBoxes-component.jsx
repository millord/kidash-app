import React from "react";
import "materialize-css";
import { Container, Row, Card, Section, Col } from "react-materialize";

export default class IconBoxes extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }
  componentDidMount() {
    var elems1 = document.querySelectorAll(".scrollspy");
    var instances1 = this.M.ScrollSpy.init(elems1);
  }
  render() {
    return (
      <Section id="servicios" className="center section-icons scrollspy">
        <Container>
          {this.instances1}
          <h4 className="align-center">
            Nuestros <span className="blue-text darken-3">Servicios</span>
          </h4>
          <Row>
            <Col s={12} m={4}>
              <Card>
                <i className="material-icons  large blue-text darken-3">
                  ac_unit
                </i>
                <h4>Instalaciones</h4>
                <p>
                  Servicios de instalación de sistemas frigoríficos en áreas
                  controladas.
                </p>
              </Card>
            </Col>
            <Col s={12} m={4}>
              <Card>
                <i className="material-icons  large blue-text darken-3">
                  shopping_cart
                </i>
                <h4>Ventas</h4>
                <p>Ventas de Piezas y Repuestos en General</p>
              </Card>
            </Col>
            <Col s={12} m={4}>
              <Card>
                <i className="material-icons  large blue-text darken-3">
                  build
                </i>
                <h4>Reparación</h4>
                <p>Reparación Equipos de Refrigeración y Calefacción.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
