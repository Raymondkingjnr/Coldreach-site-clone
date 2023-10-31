import React from "react";
import styled from "styled-components";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaRobot,
  FaSmileBeam,
} from "react-icons/fa";
import { BiTime } from "react-icons/bi";

export const StandOut = () => {
  const data = [
    {
      icon: <FaRobot />,
      text: "GPT-generated emails filling inboxes",
      des: "Inboxes are flooded with GPT-generated emails. Put yourself in your prospects shoes: They face a barrage of messages daily. To stand out, craft engaging emails that prioritize their needs. Make it about them, not you.",
    },
    {
      icon: <BiTime />,
      text: "They are wordy & long to read",
      des: "GPT-generated emails can often be wordy and lengthy. Consider your prospects perspective - theyare pressed for time. To captivate them, opt for concise communication. Keep it focused on their needs, not yours.",
    },
    {
      icon: <FaSmileBeam />,
      text: "Reduced patience",
      des: "In today's fast-paced world, prospects have limited patience, spending just 3-5 seconds on a cold email. To make an impact, your message must be concise and immediately relevant. Catch their attention by focusing on their needs, not just your own.",
    },
  ];

  return (
    <Section>
      <div className="width-section section">
        <div className="top-text">
          <h5>Here is why & how to stand out in 2023:</h5>
          <p>
            <FaQuoteLeft /> To grab your prospect's attention, empathize with
            their busy inbox. They're sifting through many emails. Be concise
            and make it about them, not you. That's the key. <FaQuoteRight />
          </p>
        </div>
        <section className="flex container">
          {data.map((item, index) => {
            return (
              <main key={index} className="card">
                <div className="top">
                  <div className="icon">{item.icon}</div>
                  <h6>{item.text}</h6>
                </div>
                <p>{item.des}</p>
              </main>
            );
          })}
        </section>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 10rem;

  .top-text {
    text-align: center;
    font-size: 30px;
  }
  .top-text p {
    max-width: 700px;
    padding-top: 20px;
    margin: auto;
    color: #6b7280;
  }
  .container {
    margin-top: 2rem;
    margin-bottom: 2rem;

    flex-wrap: wrap;
    justify-content: center;
  }
  .top {
    display: flex;
    align-items: center;

    gap: 15px;
    padding-bottom: 2rem;
  }
  .top h6 {
    font-size: 17px;
  }
  .icon {
    padding-top: 0.3rem;
    font-size: 1.7rem;
    color: #fff;
    width: 10%;
    border-radius: 20%;
    text-align: center;
    background-image: linear-gradient(
      to right,
      #0284c7,
      #007ad5,
      #006ee0,
      #055de6,
      #4f46e5
    );
    padding: 7px;
  }
  .card {
    width: 350px;
    border-radius: 7px;
    height: 300px;
    box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
    margin: auto;
    padding: 20px;
  }
  .card p {
    color: #6b7280;
  }

  @media screen and (max-width: 600px) {
    .card {
      height: 350px;
    }
  }
`;
