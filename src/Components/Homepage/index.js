import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import FooterSite from "../FooterSite";
import HN from "../HeaderNavigation";

const Homepage = () => {
  return (
    <div className="App">
      <HN />
      <body>
        <Button type="primary" href="/albums">
          Albums
        </Button>
        <Button type="primary" href="/livre">
          Livres
        </Button>
      </body>
      <FooterSite />
    </div>
  );
};

export default Homepage;
