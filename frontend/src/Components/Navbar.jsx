import React from "react";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle>
      <ul class="wrapper">
        {/* <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span>
            <i class="fab fa-facebook-f"></i>
          </span>
        </li> */}
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <span className="faicon">
            <i class="fa fa-home"></i>
          </span>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span className="faicon">
            <i class="fa fa-user "></i>
          </span>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span className="faicon">
            <i class="fa fa-code "></i>
          </span>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span className="faicon">
            <svg
              class="bi bi-grid"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
            </svg>
          </span>
        </li>
        <li class="icon github">
          <span class="tooltip">Github</span>
          <span className="faicon">
            <i class="fa fa-list"></i>
          </span>
        </li>
        <li class="icon youtube">
          <span class="tooltip">Youtube</span>
          <span className="faicon">
            <i class="fa fa-comment"></i>
          </span>
        </li>
      </ul>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
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
    display: flex;
    flex-direction: column;
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
    top: 20%;
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
    top: 40%;
    left: 0%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    left: 120%;
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

export default Navbar;
