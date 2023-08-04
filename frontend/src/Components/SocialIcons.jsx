import React from "react";
import { styled } from "styled-components";

const SocialIcons = () => {
  return (
    <SocialIconsStyle>
      <ul class="wrapper">
        {/* <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span>
            <i class="fab fa-facebook"></i>
          </span>
        </li>
        */}
        <a href="https://www.linkedin.com/in/harshit1880/">
          <li class="icon facebook">
            <span class="tooltip">LinkedIn</span>
            <span>
              <i class="fa fa-linkedin"></i>
            </span>
          </li>
        </a>
        {/* <a href="https://www.linkedin.com/in/harshit1880/">
        <li class="icon linkedin">
          <a class="tooltip" >
            LinkedIn
          </a>
          <span className="faicon">
            <i class="fa fa-linkedin"></i>
          </span>
        </li>
        </a> */}
        {/* <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span className="faicon">
            <i class="fa fa-instagram "></i>
          </span>
        </li> */}
        <a href="mailto:virtualharshit@gmail.com">
          <li class="icon github">
            <a class="tooltip">Github</a>
            <span className="faicon">
              <i class="fa fa-github"></i>
            </span>
          </li>
        </a>
        <li class="icon youtube">
          <span class="tooltip">Email</span>
          <span className="faicon">
            <i class="fa fa-envelope"></i>
          </span>
        </li>
      </ul>
    </SocialIconsStyle>
  );
};

const SocialIconsStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus,
  *:active {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    display: grid;
    height: 100%;
    width: 100%;
    font-family: "Poppins", sans-serif;
    place-items: center;
    background: linear-gradient(315deg, #ffffff, #d7e1ec);
  }

  .wrapper {
    display: inline-flex;
    list-style: none;
  }

  .faicon {
    font-size: 1.5rem;
  }

  .wrapper .icon {
    box-shadow: #0e0e0e 1px 1px 3px 0px, #f7f5f5 2px 2px 4px 2px;
    color: #000;
    position: relative;
    background: #ffffff;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #ffffff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #ffffff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #ffffff;
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #333333;
    color: #ffffff;
  }

  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: #333333;
    color: #ffffff;
  }

  .wrapper .youtube:hover,
  .wrapper .youtube:hover .tooltip,
  .wrapper .youtube:hover .tooltip::before {
    background: #cd201f;
    color: #ffffff;
  }
`;

export default SocialIcons;
