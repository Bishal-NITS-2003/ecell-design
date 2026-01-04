import React from "react";
import WhoAreWe from "../components/WhoAreWe";
import Motto from "../components/Motto";
import Pillars from "../components/Pillars";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      <WhoAreWe />
      <Motto />
      <Pillars />
    </div>
  );
};

export default AboutPage;
