import React from "react";
import Hero from "./Hero/Hero";
import Content1 from "./Content1/Content1";
import Content2 from "./Content2/Content2";
import Content3 from "./Lastcontent/Content3";
import Head from "./Header/Header";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Head />

      <Hero />
      <Content1 />
      <Content2 />
      <Content3 />
      <Footer />
    </div>
  );
};

export default Homepage;
