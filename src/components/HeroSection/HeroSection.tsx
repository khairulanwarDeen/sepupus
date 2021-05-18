import { Button } from "@material-ui/core";
import React from "react";
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <h1>Sepupus</h1>
      <p>Coming Soon</p>
      <div className="hero-btns">
        <Button
          className="btns"
          variant="outlined"
          size="large"
          style={{
            padding: "24px",
            paddingLeft: "24px",
          }}
          onClick={() => {
            console.log("leftie");
          }}
        >
          Create A Post
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
