import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer class="footer footer-center p-10 bg-gray-800 text-white text-base-content rounded">
      <div class="grid grid-flow-col gap-2">
        <h1 class="link link-hover text-white text-lg ">
          Contact Me By Bellow Technology
        </h1>
      </div>
      <div class="grid grid-flow-col gap-4 text-white">
        <p className="text-white flex p-3  text-xl">
          <FaWhatsappSquare></FaWhatsappSquare>
        </p>{" "}
        <span className="  text-2xl">....... || tamanna202163@gmail.com</span>
      </div>

      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/profile.php?id=100074914775563">
            <p className="icon text-white text-4xl">
              <AiOutlineFacebook></AiOutlineFacebook>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/tamanna-akter-95101a228/">
            <p className="icon text-white text-4xl">
              <AiFillLinkedin></AiFillLinkedin>
            </p>
          </a>
          <a href="https://github.com/Tasnim63">
            <p className="icon text-white text-4xl">
              <AiOutlineGithub></AiOutlineGithub>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
