import React from "react";
import Section from "./Section";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model 3"
        desc="Starting at $32,740 After Federal Tax Credit"
        bgImg="/images/Model-3.avif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        desc="Starting at $40,240 After Federal Tax Credit"
        bgImg="/images/Model-S.avif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model S"
        desc="Explore Inventory"
        bgImg="/images/Model-Y.avif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model X"
        desc="Explore Inventory"
        bgImg="/images/Model-X.avif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Solar Panels"
        desc="Schedule a Virtual Consultation "
        bgImg="/images/SonalPanels.avif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        bgImg="/images/SolarRoof.vif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Powerwall"
        bgImg="/images/Powerwall.avif"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Accessories"
        bgImg="/images/Accessories.avif"
        leftBtnText="Shop"
        
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
