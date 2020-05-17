import React from "react";
import "materialize-css";

import "./components.css";

export const Marcas = () => {
  return (
    <section className="section section-language grey lighten-4">
      <div className="container">
        <div className="row">
          <h4 className="center">
            <span className="blue-text text-darken-1">
              {" "}
              Trabajamos con Cualquier Marca
            </span>
          </h4>
          <br />
          <br />
          <div className="row">
            <div className="col s2">
              <img
                src={require("../components/img/mabe1.jpg")}
                className="responsive-img"
              />
            </div>
            <div className="col s2">
              <img
                src={require("../components/img/westing.png")}
                className="responsive-img"
              />
            </div>
            <div className="col s2">
              <img
                src={require("../components/img/kenmore.jpeg")}
                className="responsive-img"
              />
            </div>
            <div className="col s2">
              <img
                src={require("../components/img/whirpool.png")}
                className="responsive-img"
              />
            </div>
            <div className="col s2">
              <img
                src={require("../components/img/LG-Logo.png")}
                className="responsive-img"
              />
            </div>
            <div className="col s2">
              <img
                src={require("../components/img/sansumg2.png")}
                className="responsive-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
