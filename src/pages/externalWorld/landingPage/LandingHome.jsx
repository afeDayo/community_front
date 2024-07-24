import React from "react";
import HeroSectionLand from "./Sections/HeroSection/HeroSectionLand";
import BlueSectionLand from "./Sections/BlueSection/BlueSectionLand";
import FilterSectionLand from "./Sections/FilterSection/FilterSectionLand";
import CaroselSectionLand from "./Sections/CaroselSection/CaroselSectionLand";

const LandingHome = () => {
  return (
    <>
      <HeroSectionLand />
      <BlueSectionLand />
      <FilterSectionLand />
      <CaroselSectionLand />
    </>
  );
};

export default LandingHome;
