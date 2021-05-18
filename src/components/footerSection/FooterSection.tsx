import { Button } from "@material-ui/core";
import React from "react";
import "./FooterSection.css";

export const FooterSection: React.FC = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Sign up for Ilya and Anwar newsletter
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button
              className="btn"
              variant="outlined"
              size="large"
              style={{
                padding: "24px",
                paddingLeft: "24px",
                marginLeft: "24px",
                color: "white",
              }}
              onClick={() => {
                console.log("rightie");
              }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
