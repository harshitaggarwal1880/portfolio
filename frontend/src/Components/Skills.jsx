import React from "react";
import { styled } from "styled-components";
import html from "../utils/html.png";
import css from "../utils/css.svg";
import js from "../utils/js.png";
import react from "../utils/react.png";
import tailwind from "../utils/tailwind.png";
import express from "../utils/express.png";
import mongo from "../utils/mongo.png";
import python from "../utils/python.png";
import bootstrap from "../utils/bootstrap.png";
import socket from "../utils/socket.png";

const Skills = () => {
  const COLORS = [
    "#bbf7d0",
    "#99f6e4",
    "#bfdbfe",
    "#ddd6fe",
    "#f5d0fe",
    "#fed7aa",
    "#fee2e2",
  ];

  const tags = [
    {
      color: "HTML",
      image: html,
    },
    {
      color: "CSS",
      image: css,
    },
    {
      color: "JavaScript",
      image: js,
    },
    {
      color: "React",
      image: react,
    },
    {
      color: "Tailwind",
      image: tailwind,
    },
    {
      color: "Express js",
      image: express,
    },
    {
      color: "Mongo DB",
      image: mongo,
    },
    {
      color: "Python",
      image: python,
    },
    {
      color: "Bootstrap",
      image: bootstrap,
    },
    {
      color: "Socket",
      image: socket,
    },
  ];

  const DURATION = 35000;
  const ROWS = 2;
  const TAGS_PER_ROW = 7;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text, color, image }) => (
    <div
      className="tag  flex flex-col justify-center items-center"
      style={{ color: color }}
    >
      <img src={image} className="h-[40px]" alt="" />
      <div className=""> {text} </div>
    </div>
  );

  return (
    <Container>
      <div className="app">
        <div className="tag-list">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(tags)
                .slice(0, TAGS_PER_ROW)
                .map((tag, index) => (
                  <Tag
                    text={tag.color}
                    image={tag.image}
                    key={index}
                    color={COLORS[index]}
                  />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  background: #121733;
  color: #f8fafc;
  .app {
    // min-width: 100vw;
    // min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    text-align: center;
  }
  header h1 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 768px) {
    header h1 {
      font-size: 3rem;
    }
  }
  header p {
    color: #94a3b8;
  }
  .tag-list {
    width: 68vw;
    max-width: 90vw;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    gap: 2rem 0;
    position: relative;
    padding: 1.5rem 0;
    overflow: hidden;
  }
  .loop-slider .inner {
    display: flex;
    gap: 0.5rem;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }
  .tag {
    display: flex;
    align-items: center;
    width: 125px;
    gap: 0.5rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    background-color: black;
    border: 2px solid white;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    margin-right: 1rem;
    box-shadow: #121733 4px 4px 0 0, #f7f5f5 4px 4px 0 2px;
    // box-shadow: 0 0.1rem 0.2rem #000, 0 0.1rem 0.5rem #000, 0 0.2rem 1.5rem #000;
  }
  .tag span {
    font-size: 1.2rem;
    color: #64748b;
  }
  .fade {
    pointer-events: none;
    background: linear-gradient(
      90deg,
      #121733,
      transparent 30%,
      transparent 70%,
      #121733
    );
    position: absolute;
    inset: 0;
  }
  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export default Skills;
