import React from "react";
import styled from "styled-components";

export const Hero = () => {
  return (
    <Section>
      <div className="width-section hero">
        <h1>
          Sound relevant to the <br /> right companies
        </h1>

        <p>
          Find the right companies at the right time and always sound relevant.
          Research and personalize your outreach with AI bots, powered by
          Coldreach.
        </p>

        <div className="buttons flex">
          <button className="btn sign">Sign In</button>
          <button className="btn request">Request Access</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  text-align: center;
  margin-top: 10rem;
  /* height: 90vh; */
  position: relative;
  margin-bottom: 2rem;

  h1 {
    font-size: 5.7rem;
    font-weight: bolder;
    font-family: "Roboto";
    padding-bottom: 2rem;
    line-height: 6rem;
    color: #2563eb;
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 3rem;
      line-height: 2.7rem;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2rem;
      line-height: 2.7rem;
    }
  }

  p {
    max-width: 700px;
    padding: 1rem 2rem 3rem 2rem;
    margin: auto;
    color: #747474;
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 15px;
      /* line-height: 2.7rem; */
    }
  }

  .request {
    background-image: linear-gradient(
      to right,
      #0284c7,
      #007ad5,
      #006ee0,
      #055de6,
      #4f46e5
    );
    color: #fff;
  }
  .sign {
    background: #e5e7eb;
  }
`;
