import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
export const Footer = () => {
  const links = [
    {
      icon: <BsLinkedin />,
      path: "https://www.linkedin.com/company/coldreach/",
    },
    {
      icon: <RiTwitterXFill />,
      path: "https://x.com/coldreach_ai?s=20",
    },
  ];

  return (
    <Section>
      <main>
        <div className="logo">
          <img src={logo} alt="" />
          <h5>Coldreach</h5>
        </div>
        <div className="address">
          <p> San Francisco, California 94124, US</p>
        </div>
        <div className="links flex">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <a href={link.path}>{link.icon}</a>
              </div>
            );
          })}
        </div>
      </main>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 10rem;

  /* background: #d1d5db; */
  main {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  img {
    width: 40px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo h5 {
    font-family: "Agbalumo";
    font-size: 25px;
    letter-spacing: 2px;
  }
`;
