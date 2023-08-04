import React from "react";
import { styled } from "styled-components";
import logo from "../Images/photo.jpg";

const HeaderSide = () => {
  return (
    <HeaderSideStyle>
      <div class="container">
        <div class="content">
          <div class="square twitch w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
            <span class="one"></span>
            <span class="two"></span>
            <span class="three"></span>
            <div class="circle">
                <img src={logo} alt="" className="rounded-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </HeaderSideStyle>
  );
};

const HeaderSideStyle = styled.div`
  .container {
    width: 100%;
    min-height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .content {
    width: 100%;
    min-height: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content h1 {
    font-size: 45px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .content p {
    font-size: 16px;
    color: #fff;
  }

  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
  }

  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: rgb(20, 36, 50);
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }

  .square {
    position: relative;
    // margin: 0 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom: 50px;
  }

  .square .one {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
    transition: 0.5s;
    animation: threadanimate 6s linear infinite;
  }

  .twitch:hover .one {
    border: 2px solid red;
    // background: white;
    animation: threadanimate2 3s linear infinite;

  }

  .square .two {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 38% 62% 63% 35% / 41% 44% 56% 59%;
    transition: 0.5s;
    animation: threadanimate 6s linear infinite;
  }

  .twitch:hover .two {
    border: 3px solid blue;
    // background: rgb(20, 36, 50);
    // background: white;
    animation: threadanimate2 3s linear infinite;
  }

  .square .three {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 31% 45% 74% 35% / 38% 56% 51% 37%;
    transition: 0.5s;
    animation: threadanimate2 10s linear infinite;
  }
  .twitch:hover .three {
    border: 3px solid green;
    // background: rgb(20, 36, 50);
    // background: white;
    animation: threadanimate 3s linear infinite;
  }

  .circle {
    position: relative;
    padding: 40px;
    text-align: center;
    transition: 0.5s;
    z-index: 1000;
  }

  .square:hover {
    color: white;
  }

  .content:hover {
    color: #ffffff;
  }

  @keyframes threadanimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes threadanimate2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .DrugRadar {
    font-size: 50px;
  }
`;

export default HeaderSide;
