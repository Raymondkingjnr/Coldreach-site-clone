import React from "react";
import styled from "styled-components";
import founderImg from "../assets/founder.jpeg";

export const OurFounder = () => {
  return (
    <Section>
      <div className=" founder-sec">
        <div className="top-text">
          <h5>Our Founder</h5>
        </div>

        <div className="banner-sec">
          <img src={founderImg} alt="" />

          <div className="founder-text">
            <h5>Personal Details</h5>
            <p>
              Shen transitioned from being a software engineer to becoming an
              entrepreneur. He mentions that he wanted to be around more people,
              which led him to start his own ventures. Additionally, Shen is
              proud of his experience in leading the product and growth team at
              EasyJobs, where he drove product traction from 0 to 20K MAU with
              outbound sales and marketing efforts. Evidence: In the LinkedIn
              profile, it is mentioned that Shen has been a software engineer
              but wanted to be around more people, so he became an entrepreneur.
              It is also mentioned that Shen led the product and growth team at
              EasyJobs, driving product traction from 0 to 20K MAU with outbound
              sales and marketing efforts.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 10rem;
  padding-bottom: 2rem;
  .top-text {
    text-align: center;

    margin-bottom: 2.5rem;
  }
  .top-text h5 {
    font-size: 25px;
    font-family: "Roboto";
  }
  img {
    width: 70px;
    border-radius: 100%;
    position: absolute;
    left: 47%;
  }
  .banner-sec {
    position: relative;
    border: 2px transparent solid;
  }
  .founder-text {
    background: radial-gradient(
          circle at 100% 100%,
          #ffffff 0,
          #ffffff 3px,
          transparent 3px
        )
        0% 0%/8px 8px no-repeat,
      radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px)
        100% 0%/8px 8px no-repeat,
      radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px)
        0% 100%/8px 8px no-repeat,
      radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px)
        100% 100%/8px 8px no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)
        calc(100% - 16px) no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 16px)
        calc(100% - 10px) no-repeat,
      radial-gradient(#4f46e5 6%, #48abe0 100%);
    border-radius: 7px;
    text-align: center;
    padding: 3rem;
    margin: 2rem auto 0 auto;
    max-width: 1000px;
  }
  .founder-text p {
    color: #6b7280;
  }
  .founder-text h5 {
    margin-top: 1.5rem;
    font-size: 25px;
    font-family: "Roboto";
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 600px) {
    .founder-text {
      padding: 1rem;
    }
    .banner-sec {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    img {
      left: 44%;
    }
  }
`;
