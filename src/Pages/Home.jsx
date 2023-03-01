import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Landing from "../components/Landing page";
import Highlight from "../components/Highlights";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlight />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </>
  );
};

export default Home;
