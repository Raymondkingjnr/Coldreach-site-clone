import React from "react";
import styled from "styled-components";

export const Infor = () => {
  const results = [
    {
      text: "Machine Learning for Materials Case Studies",
      description:
        "Some examples of features this company could build using AI/LLMs are: an AI-powered materials discovery system that accelerates the development of new materials, an AI-driven formulation optimization tool that improves the performance of chemical formulations, an AI-guided closed-loop synthesis system for catalysts, and an AI-based toxicity prediction tool for screening out potentially harmful formulations. Evidence: The content mentions that Citrine Informatics is an AI SaaS platform for materials and chemicals R&D. It highlights case studies where machine learning and AI have been used to accelerate materials development, optimize formulations, and predict toxicity. These examples demonstrate the company's expertise in leveraging AI/LLMs to improve their core product. ",
    },
    {
      text: "Episode 010: Dr. Cynthia Arnold - The business case for ...",
      description:
        "Some examples of features this company could build using AI/LLMs are: an AI-powered materials recommendation system for R&D, an AI-driven predictive modeling tool for materials properties, an AI-based natural language processing tool for analyzing scientific literature and extracting insights, and an AI-powered virtual assistant for researchers to assist with data analysis and experiment planning. Evidence: The content mentions that the company is an AI SaaS platform for materials and chemicals R&D. They provide solutions for adding business value, AI at scale, and adoption. These capabilities can be leveraged to develop AI/LLM-based features. Additionally, the content highlights the importance of data-driven methodologies and knowledge transfer within materials and chemicals organizations, which aligns with the idea of using AI/LLMs to enhance their core product. ",
    },
    {
      text: "Episode 008: Joerg Hellwig – Digital Transformation in the ...",
      description:
        "Some examples of features this company could build using AI/LLMs are: an AI-powered materials discovery system that predicts and recommends new materials with desired properties, an AI-driven predictive maintenance solution for optimizing the performance and lifespan of materials and chemical processes, an AI-based quality control system for detecting and preventing defects in materials production, and an AI-powered demand forecasting tool for optimizing inventory management and supply chain operations. Evidence: The content mentions that the company is an AI SaaS platform for materials and chemicals R&D. They focus on adding business value, AI at scale, and adoption. These capabilities can be leveraged to develop AI/LLM-based features that improve materials discovery, predictive maintenance, quality control, and demand forecasting.",
    },
    {
      text: "Citrine Informatics Recognized as the Best AI-Powered Big",
      description:
        "Some examples of features this company could build using AI/LLMs are: an AI-powered materials discovery system that predicts the properties and behavior of new materials, an AI-driven recommendation engine for optimizing chemical formulations, an AI-based natural language processing tool for analyzing scientific literature and extracting relevant information, and an AI-powered predictive modeling tool for simulating and optimizing materials and chemical processes. Evidence: The content mentions that Citrine Informatics is an AI SaaS platform for materials and chemicals R&D. It highlights the Citrine Platform's ability to combine materials-specific data handling, scalable compute for AI and data processing, and modular composable AI units optimized to predict materials behavior. These capabilities suggest that the company could leverage AI/LLMs to develop features such as materials discovery, recommendation engines, natural language processing, and predictive modeling.",
    },
    {
      text: "Adding Value with AI Driven Software ",
      description:
        "Some examples of features this company could build using AI/LLMs are: an AI-powered materials discovery system that predicts novel materials with desired properties, an AI-driven recommendation engine for optimizing processing parameters, an AI-based risk assessment tool for mitigating supply chain risks, and an AI-enabled knowledge management system for capturing and disseminating expertise across project teams.Evidence: The content mentions that Citrine Informatics is an AI SaaS platform for materials and chemicals R&D. They emphasize the benefits of their platform in accelerating product development, guiding R&D decisions, and capturing and disseminating knowledge. These objectives align with the idea of using AI/LLMs to improve their core product by enabling features such as materials discovery, recommendation engines, risk assessment, and knowledge management.",
    },
  ];

  return (
    <Section>
      <div className="width-section">
        <div className="text-header">
          <h1>We found the following results meeting your requirements.</h1>
        </div>
        <article className="info">
          {results.map((item, index) => {
            return (
              <main key={index} className="card">
                <h5>{item.text}</h5>
                <p>{item.description}</p>
              </main>
            );
          })}
        </article>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 10em;
  margin-bottom: 2rem;
  .text-header {
    text-align: center;
  }
  h5 {
    font-size: 25px;
  }
  p {
    padding-top: 2rem;
    line-height: 2.5rem;
  }

  .info {
    flex-direction: column;
    padding-top: 2.5rem;
    /* position: relative; */
    height: 500px;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .info::-webkit-scrollbar {
    display: none;
  }
  .card {
    width: 1000px;
    border-radius: 7px;
    position: sticky;
    margin: 0 auto;
    top: 0;
    background: #1f2937;
    color: #fafafa;
    border: #fafafa 2px solid;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
  .card:nth-child(2) {
    top: 20px;
  }
  .card:nth-child(3) {
    top: 40px;
  }
  .card:nth-child(4) {
    top: 60px;
  }
  .card:nth-last-child() {
    top: 0;
  }

  @media screen and (max-width: 900px) {
    p {
      font-size: 13px;
      line-height: 2rem;
    }
    h5 {
      font-size: 20px;
    }
    .card {
      width: 500px;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 13px;
      line-height: 2rem;
    }
    h5 {
      font-size: 20px;
    }
    .card {
      width: 450px;
    }
    .info {
      height: 900px;
    }
  }
  @media screen and (max-width: 460px) {
    .card {
      width: 300px;
    }
    .info {
      height: 1100px;
    }
  }
`;
