import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"https://i.imgur.com/DXEZSVd.png"}
      />
      <Biography imageUrl={"https://i.imgur.com/AxDySJs.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
