import React from "react";
import "materialize-css";
import { Carousel } from "react-materialize";

export const Testimonials = () => {
  return (
    <Carousel
      carouselId="Carousel-2"
      className="black-text center"
      options={{
        fullWidth: true,
      }}
    >
      <div className="grey lighten-4">
        <h2>Testimonio 1</h2>
        <p>Conocen el problema y lo resuelven</p>
        <p>
          <em>Ministerio de Turismo</em>
        </p>
      </div>
      <div className="grey lighten-4">
        <h2>Testimonio 2</h2>
        <p>Trabajan rapido y no te hacen esperar</p>
        <p>
          <em>Farmacia Carol</em>
        </p>
      </div>
      <div className="grey lighten-4">
        <h2>Testimonio 3</h2>
        <p>Muy profesonal su trabajo y trato</p>
        <p>
          <em>Pastor Miguel Nunez</em>
        </p>
      </div>
      <div className="grey lighten-4">
        <h2>Testimonio 4</h2>
        <p>El mejor servicio tecnico que se pueda dar</p>
        <p>
          <em>Pepin Corripio</em>
        </p>
      </div>
    </Carousel>
  );
};
