import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import FooterSite from "../FooterSite";
import HN from "../HeaderNavigation";

const Homepage = () => {
  return (
    <div className="App">
      <HN />
      <body></body>
      <FooterSite />
    </div>
  );
};

export default Homepage;
