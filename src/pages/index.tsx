import { PageProps } from "gatsby";
import * as React from "react";
import RecipeReviewCard from "../components/cards/cards";
import FooterSection from "../components/footerSection/FooterSection";
import HeroSection from "../components/HeroSection/HeroSection";
import { NavBar } from "../components/NavBar";

// markup
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <RecipeReviewCard />
      <FooterSection />
      {/* <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            justifyContent: "center",
            backgroundColor: "#cfe8fc",
            width: "100%",
            height: "50vh",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            objectFit: "contain",
          }}
        />
      </Container> */}
    </>
  );
};

export default IndexPage;
