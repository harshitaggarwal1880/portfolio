import React from "react";
import { styled } from "styled-components";

const Social = () => {
  return (
    <SocialStyle>
      <div class="container">
        {/* <div>
        <i class="fa fa-instagram" id="apple"></i>
        </div> */}
        <a
          href="https://github.com/harshitaggarwal1880"
          className="border-white border-2 rounded-[2rem] shadow-[#121733_4px_4px_0_0,#f7f5f5_4px_4px_0_2px] transform active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]"
        >
          <i class="fa fa-github-square github" id="github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/harshit1880/"
          className="border-white border-2 rounded-[2rem] shadow-[#121733_4px_4px_0_0,#f7f5f5_4px_4px_0_2px] transform active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] "
        >
          <i class="fa fa-linkedin" id="twitter"></i>
        </a>
        <a
          href="mailto:virtualharshit@gmail.com"
          className="border-white border-2 rounded-[2rem] shadow-[#121733_4px_4px_0_0,#f7f5f5_4px_4px_0_2px] transform active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] "
        >
          <i class="fa fa-envelope" id="twitter"></i>
        </a>

        {/* <i class="fa fa-facebook-square" id="facebook"></i> */}
      </div>
    </SocialStyle>
  );
};

const SocialStyle = styled.div`
  .container {
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 1rem;
    // height: 100vh;
    // width: 100vw;
  }
  #apple,
  #twitter,
  #github,
  #facebook {
    font-size: 2em;
    background-color: #18191f;
    color: #fff;
    box-shadow: 2px 2px 2px #d13c3c80, 10px 1px 12px #3da9ff,
      2px 2px 10px #03A9FA, 2px 2px 3px #00000080,
      inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
      inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;
    border-radius: 29px;
    padding: 11px 19px;
    animation: animate 3s linear infinite;
    text-shadow: 0 0 50px #0072ff;
  }
  #twitter {
    animation-delay: 0.3s;
  }
  #facebook {
    animation-delay: 0.7s;
  }
  #github {
    animation-delay: 0.1s;
  }

  @keyframes animate {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
`;

export default Social;
