import React from "react";
import styled from "styled-components";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";

export const Headers = () => {
  return (
    <Section>
      <Nav />
      <Hero />
    </Section>
  );
};

const Section = styled.div`
  position: relative;
`;
