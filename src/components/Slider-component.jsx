import React from "react";
import "materialize-css";
import { Slider, Slide, Caption, Button } from "react-materialize";

export const SliderComponent = () => {
  return (
    <section id="inicio" className="scrollspy">
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: false,
          interval: 2000,
        }}
      >
        <Slide image={<img alt="" src={require("./img/freezer1.jpeg")} />}>
          <Caption placement="left">
            <h3 className="white-text ">Kidash S.R.L</h3>
            <h5 className="white-text ">Instalaciones de Climatización</h5>
            <Button
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
            >
              Leer más
            </Button>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={require("./img/staff2.jpeg")} />}>
          <Caption placement="center">
            <h3 className="white-text ">Amplia Gama de Servicios!</h3>
            <h5 className="white-text ">
              a nivel industrial, doméstico y comercial
            </h5>
            <Button
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
            >
              Leer más
            </Button>
          </Caption>
        </Slide>

        <Slide image={<img alt="" src={require("./img/freezer3.jpeg")} />}>
          <Caption placement="right">
            <h3 className="white-text">
              {" "}
              Reparación Equipos de Refrigeración y Calefacción
            </h3>
            <h5 className="white-text">calidad y tiempo de repuesta</h5>
            <Button
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
            >
              Leer más
            </Button>
          </Caption>
        </Slide>
      </Slider>
    </section>
  );
};
