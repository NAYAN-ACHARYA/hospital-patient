import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"https://i.imgur.com/9Yj3Ahm.png"}
      />
      <Biography imageUrl={"https://i.imgur.com/wH0tBw3.png"} />
    </>
  );
};

export default AboutUs;
