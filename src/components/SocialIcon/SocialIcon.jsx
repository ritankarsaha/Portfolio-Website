import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaDiscord} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 3rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  a {
    font-size: 1.7rem;
    color: rgb(180, 180, 180);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  .item + .item {
    margin-left: 2rem;
  }

  @media screen and (max-width: 1200px) {
      display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/ritankar-saha-8041b9289/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="mailto:ritankar.saha786@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/ritankarsaha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.instagram.com/ritankarxx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="item">
          <a
            href="https://x.com/ritankarxx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="item">
          <a
            href="https://api.whatsapp.com/send?phone=9732839187"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li className="item">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
        </li>

      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
