import React from "react";

export const About = () => {
  return (
    <section className="section section-about grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h3>
              <span className="deep-blue-text text-darken-1">Acerca de</span>{" "}
              Nosotros
            </h3>
            <p className="flow-text">
              Somos una compañía especializada en instalaciones de
              climatización, industrial, doméstica o comercial, ampliamente
              reconocida por los mayores fabricantes de equipos y componentes
              para sistemas de Climatización y Ventilación.
            </p>
          </div>
          <div className="col s12 m6">
            <img
              src={require("../components/img/about.jpg")}
              className="circle responsive-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
