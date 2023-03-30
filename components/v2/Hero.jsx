import React from "react";
import {
  HeroContainer,
  Container,
  HeaderH1,
  FeaturedLabel,
  DisplayParagraph,
} from "./General";

import Image from "next/image";

import HeroImg from "../../assets/hero-img.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <Container className="d-flex">
        <div className="info-container">
          <HeaderH1>
            Aprende a programar y desarrollo web 
            <FeaturedLabel>fácil</FeaturedLabel> y {" "}
            <FeaturedLabel>sin costo</FeaturedLabel>
          </HeaderH1>
          <DisplayParagraph>
            Recursos para lograr tus objetivos como programador
          </DisplayParagraph>
        </div>
        <div className="img-container">
          <Image src={HeroImg} alt="hero" />
        </div>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
