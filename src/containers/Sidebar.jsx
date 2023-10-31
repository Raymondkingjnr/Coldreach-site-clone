import React from "react";

import styled from "styled-components";

export const Sidebar = ({ navItems }) => {
  return (
    <Section>
      <div className="sidebar-nav-links">
        <ul className="sidebar-links">
          {navItems.map((link, index) => {
            return <li key={index}>{link.text}</li>;
          })}
        </ul>
      </div>
    </Section>
  );
};

const Section = styled.div`
  .sidebar-links {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 30px;
  }
  .sidebar-links li {
    padding-top: 2rem;
  }
  .sidebar-login {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
