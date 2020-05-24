import React from "react";
import "materialize-css";
import { Navbar, NavItem, Icon } from "react-materialize";

export const NavbarSlide = () => {
  return (
    <Navbar
      alignLinks="right"
      className="blue darken-3"
      brand={
        <a className="brand-logo" href="#">
          Logo
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="#inicio">Inicio</NavItem>
      <NavItem href="#servicios">Servicios</NavItem>
      <NavItem href="#about">Acerca</NavItem>
      <NavItem href="#contact">Contacto</NavItem>
    </Navbar>
  );
};
