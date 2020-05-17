import React from "react";
import { NavbarSlide } from "./components/NavbarSlide";
import { SliderComponent } from "./components/Slider-component";

import { IconBoxes } from "./components/IconBoxes-component";
import { Testimonials } from "./components/Testimonial";
import { SocialMedia } from "./components/SocialMedia";

import { Contacts } from "./components/Contacts";
import { PortFooter } from "./components/Footer";

import { Marcas } from "./components/Marcas-components";
import { About } from "./components/About";
import { ServicioTecnico } from "./components/ServicioTecnico";

export const App = () => {
  return (
    <div>
      <NavbarSlide />
      <SliderComponent />
      <IconBoxes />
      <About />
      <ServicioTecnico />
      <Marcas />

      <SocialMedia />
      <Contacts />
      <PortFooter />
    </div>
  );
};
