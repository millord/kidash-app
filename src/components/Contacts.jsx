import React from "react";
import "materialize-css";

import {
  Section,
  CardPanel,
  Row,
  Col,
  Container,
  Collection,
  CollectionItem,
} from "react-materialize";

export default class Contacts extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }
  componentDidMount() {
    var elems1 = document.querySelectorAll(".scrollspy");
    var instances3 = this.M.ScrollSpy.init(elems1);
  }
  render() {
    return (
      <Section id="contact" className="scrollspy">
        <Container>
          {this.instances3}
          <Row>
            <Col m={6} s={12}>
              <CardPanel className="blue darken-3">
                <span className="white-text">
                  <i className="material-icons medium">email</i>
                  <h5>Contacta nuestro servicios</h5>
                  Para cualquier pedido
                </span>
              </CardPanel>
              <Collection header="Ubicación">
                <CollectionItem>Kidash S.R.L</CollectionItem>
                <CollectionItem>
                  Residencial Reporto Rosa , Suit 2C
                </CollectionItem>
                <CollectionItem>
                  Las Palmas de Herrera, Santo Domingo Oeste DR,
                </CollectionItem>
              </Collection>
            </Col>
            <Col m={6} s={12}>
              <div class="card-panel grey lighten-3">
                <h5>Envia tus sugerencias</h5>
                <div class="input-field">
                  <input type="text" id="nombre" />
                  <label for="nombre">Nombre</label>
                </div>
                <div class="input-field">
                  <input type="email" id="email" />
                  <label for="email">Email</label>
                </div>
                <div class="input-field">
                  <input type="text" id="tefono" />
                  <label for="telefono">Telefono</label>
                </div>
                <div class="input-field">
                  <textarea
                    class="materialize-textarea"
                    id="message"
                  ></textarea>
                  <label for="message">Mensaje</label>
                </div>
                <input
                  type="submit"
                  value="Enviar"
                  className="btn blue darken-2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
