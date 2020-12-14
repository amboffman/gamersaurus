import React from "react";
import Carousel from "../Carousel"
import CarouselCardPlaceholder from "../CarouselCardPlaceholder"
import "./style.css";

function CarouselPlaceholder(props) {
  return (
    <Carousel>
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
      <CarouselCardPlaceholder />
    </Carousel>
  );
}

export default CarouselPlaceholder;
