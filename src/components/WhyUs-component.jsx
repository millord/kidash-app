import React from "react";
import "materialize-css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Icon,
  CardTitle,
  Section,
} from "react-materialize";

export const WhyUs = () => {
  return (
    <Section>
      <Container>
        <Row>
          <h4 className="center-align">Las Marcas con las que trabajamos</h4>
          <Col m={4} s={12}>
            <Card
              actions={[]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={require("../components/img/LG-Logo.png")}
                ></CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              actions={[]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={require("../components/img/sansumg2.png")}
                ></CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              actions={[]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={require("../components/img/whirpool.png")}
                ></CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
