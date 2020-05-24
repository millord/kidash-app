import React from "react";
import "materialize-css";
import { Container, Row, Col, Autocomplete, Section } from "react-materialize";
import "./components.css";

export const SearchBox = () => {
  return (
    <Section className="green darken-1 white-text center">
      <Container>
        <Row>
          <Col s={12}>
            <h3>Busca productos de tu interes</h3>
            <Autocomplete
              id="Autocomplete-1"
              className="section-search center-align autocomplete-content"
              options={{
                data: {
                  Aruba: null,
                  Argentina: null,
                  Argelia: "https://placehold.it/250x250",
                },
              }}
              placeholder="search"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
