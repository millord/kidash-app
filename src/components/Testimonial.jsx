import React from "react";
import "materialize-css";

export const Testimonials = () => {
  return (
    <section classNames="section section-testimonial grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="carousel carousel-slider center">
              <div className="carousel-item" href="#one!">
                <h2>Testimonial 1</h2>
                <p className="flow-text">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat assumenda ad minima reiciendis vitae fuga, dicta ipsa
                  sit maxime aperiam quo animi expedita adipisci officia hic,
                  odio omnis temporibus earum?"
                  <p>
                    <em>- John Doe From Microsystems</em>
                  </p>
                </p>
                <div className="carousel-fixed-item center hide-on-small-and-down">
                  <a href="#" className="btn grey">
                    Read More
                  </a>
                </div>
              </div>
              <div className="carousel-item" href="#two!">
                <h2>Testimonial 2</h2>
                <p className="flow-text">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat assumenda ad minima reiciendis vitae fuga, dicta ipsa
                  sit maxime aperiam quo animi expedita adipisci officia hic,
                  odio omnis temporibus earum?"
                  <p>
                    <em>- Mike SMith From Edge INC</em>
                  </p>
                </p>
                <div className="carousel-fixed-item center hide-on-small-and-down">
                  <a href="#" className="btn grey">
                    Read More
                  </a>
                </div>
              </div>
              <div className="carousel-item" href="#three!">
                <h2>Testimonial 3</h2>
                <p className="flow-text">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat assumenda ad minima reiciendis vitae fuga, dicta ipsa
                  sit maxime aperiam quo animi expedita adipisci officia hic,
                  odio omnis temporibus earum?"
                  <p>
                    <em>- Karen Williams from Techsoft</em>
                  </p>
                </p>
                <div className="carousel-fixed-item center hide-on-small-and-down">
                  <a href="#" className="btn grey">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
