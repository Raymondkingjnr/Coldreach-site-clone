import React from "react";
import Y from "../assets/YC.png";
import styled from "styled-components";

export const Sponsor = () => {
  return (
    <Section>
      <div className="width-section">
        <h1>Coldreach is Backed By:</h1>
        <div className="sponsor-logo flex">
          <img src={Y} alt="" />
          <h2>Combinator</h2>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  text-align: center;
  margin-top: 10rem;
  h1 {
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 3rem;
  }
  h2 {
    color: #ff6600;
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 5px;
  }

  .sponsor-logo img {
    width: 80px;
  }
  .sponsor-logo {
    padding-bottom: 2rem;
    gap: 30px;
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      padding-bottom: 2rem;
    }
    h2 {
      font-size: 30px;
      letter-spacing: 2px;
    }
    .sponsor-logo img {
      width: 40px;
      border-radius: 7px;
    }
    .sponsor-logo {
      /* padding-bottom: 2rem; */
      gap: 20px;
    }
  }
`;
