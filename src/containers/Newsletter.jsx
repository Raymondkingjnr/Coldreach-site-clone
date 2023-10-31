import React from "react";
import styled from "styled-components";

export const Newsletter = () => {
  return (
    <Section>
      <div className="width-section newsletter-sec flex">
        <main>
          <h5>Stay up-to-date with new feature releases</h5>
          <p>
            This year will be rich of feature and product releases. Join our new
            AI product launches mailing list to stay informed. We will only send
            you notifications about new releases, we promise.
          </p>
        </main>
        <aside>
          <input type="text" placeholder="Enter your email" id="" />
          <button className="btn subscribe-btn">subscribe</button>
        </aside>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 10rem;
  padding: 2rem;
  .newsletter-sec {
    justify-content: space-between;
    flex-wrap: wrap;
    background: #f3f4f6;
    padding: 4rem;
    border-radius: 7px;
  }
  main {
    width: 600px;
  }
  main h5 {
    font-family: "Roboto";
    font-size: 25px;
    padding-bottom: 1.5rem;
  }
  main p {
    color: #6b7280;
    line-height: 2rem;
  }
  aside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  aside input {
    width: 400px;
    outline: none;
    padding: 17px;
    border: transparent;
    border-radius: 7px;
    font-family: "Roboto";
  }

  .subscribe-btn {
    background-image: linear-gradient(
      to right,
      #0284c7,
      #007ad5,
      #006ee0,
      #055de6,
      #4f46e5
    );
    color: #fff;
    margin-left: 1rem;
    padding: 11px;
    width: 150px;
  }
  @media screen and (max-width: 600px) {
    .newsletter-sec {
      padding: 2rem;
    }
    aside input {
      width: 300px;
    }
    .subscribe-btn {
      width: 100px;
    }
  }
  @media screen and (max-width: 470px) {
    aside input {
      width: 200px;
    }
  }
`;
