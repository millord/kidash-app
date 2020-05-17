import React from "react";
import "materialize-css";
import { Slider, Slide, Caption, Button } from "react-materialize";

export const SliderComponent = () => {
  return (
    <section>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: false,
          interval: 2000,
        }}
      >
        <Slide image={<img alt="" src={require("./img/freezer1.jpg")} />}>
          <Caption placement="left">
            <h3 className="blue-text text-darken-3">Kidash S.R.L</h3>
            <h5 className="blue-text text-darken-3">
              Instalaciones de Climatización
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
        <Slide image={<img alt="" src={require("./img/staff2.jpg")} />}>
          <Caption placement="center">
            <h3 className="blue-text text-darken-3">
              Amplia Gama de Servicios!
            </h3>
            <h5 className="blue-text text-darken-3">
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

        <Slide image={<img alt="" src={require("./img/freezer3.jpg")} />}>
          <Caption placement="right">
            <h3 className="blue-text text-darken-3">
              {" "}
              Reparación Equipos de Refrigeración y Calefacción
            </h3>
            <h5 className="blue-text text-darken-3">
              calidad y tiempo de repuesta
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
      </Slider>
    </section>
  );
};
