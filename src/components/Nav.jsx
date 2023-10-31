import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Sidebar } from "../containers/Sidebar";

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      text: "Prospect",
    },
    {
      text: "Write",
    },
    {
      text: "Automation",
    },
    {
      text: "BluePrint",
    },
  ];

  return (
    <Section>
      <nav>
        <main className="logo">
          <img src={logo} alt="logo" />
          <h5>Coldreach</h5>
          <ul className="flex nav-ul">
            {navItems.map((item, index) => {
              return <li key={index}>{item.text}</li>;
            })}
          </ul>
        </main>
        <div className="right-sec">
          <div className="buttons flex">
            <button className="btn sign">Sign In</button>
            <button className="btn request">Request Access</button>
          </div>
          <input
            type="checkbox"
            id="checkbox2"
            class="checkbox2 visuallyHidden"
          />
          <label for="checkbox2">
            <div
              class="hamburger hamburger2"
              onClick={() => setToggle(!toggle)}
            >
              <span class="bar bar1"></span>
              <span class="bar bar2"></span>
              <span class="bar bar3"></span>
              <span class="bar bar4"></span>
            </div>
          </label>
        </div>
      </nav>
      <div className={`${toggle ? "sidebar show-sidebar" : "sidebar"}`}>
        <Sidebar navItems={navItems} />
      </div>
    </Section>
  );
};

const Section = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7); /* Adjust the opacity as needed */
  backdrop-filter: blur(10px);
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 1rem 2rem;
    max-width: 1500px;
    margin: auto;
  }
  .nav-ul {
    margin-left: 4rem;
  }
  .right-sec {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo img {
    width: 30px;
    object-fit: contain;
  }
  .logo h5 {
    font-family: "Agbalumo";
    letter-spacing: 2px;
    padding-bottom: 1px;
    font-size: 1.5rem;
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
    padding: 7px;
    color: #fff;
  }
  .sign {
    background: #e5e7eb;
    padding: 7px;
  }

  .sidebar {
    width: 100%;
    height: auto !important;
    background-image: linear-gradient(
      to right,
      #0284c7,
      #007ad5,
      #006ee0,
      #055de6,
      #4f46e5
    );
    top: 100%;
    left: 0%;
    position: fixed;
    color: #fff;
    transform: translate(-100%);
    transition: all 0.3s linear;
    padding-top: 35px;
    padding-bottom: 35px;
    z-index: 100;
    display: none;
  }
  .show-sidebar {
    transform: translate(0);
  }
  @media screen and (max-width: 1100px) {
    .nav-ul {
      display: none;
    }
    .sidebar {
      display: block;
    }
    .right-sec .buttons {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .logo h5 {
      font-size: 1rem;
    }
  }
`;
