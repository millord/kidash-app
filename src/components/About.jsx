import React from "react";

export default class About extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }
  componentDidMount() {
    var elems1 = document.querySelectorAll(".scrollspy");
    var instances2 = this.M.ScrollSpy.init(elems1);
  }
  render() {
    return (
      <section
        id="about"
        className="section section-about grey lighten-4 scrollspy"
      >
        {this.instances2}
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h4>
                Acerca de <span className="blue-text darken-3">Nosotros</span>
              </h4>
              <p className="flow-text">
                Somos una compañía especializada en instalaciones de
                climatización, industrial, doméstica o comercial, ampliamente
                reconocida por los mayores fabricantes de equipos y componentes
                para sistemas de Climatización y Ventilación.
              </p>
            </div>
            <div className="col s12 m6">
              <img
                src={require("../components/img/about.jpeg")}
                className="circle responsive-img"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
