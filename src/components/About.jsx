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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              odio eum magnam aut at voluptates omnis sint reiciendis dolorem
              recusandae.
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
