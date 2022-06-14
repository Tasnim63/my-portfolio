import React from "react";
import { RiContactsLine } from "react-icons/ri";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class="footer footer-center p-16 bg-gray-800 text-white text-base-content rounded">
      <div class="grid grid-flow-col gap-2">
        <div className=" flex flex-row">
          <p className=" mx-4 text-white icons  text-3xl">
            <RiContactsLine></RiContactsLine>
          </p>
          <h1 class=" text-white text-lg ">Contact Me By Bellow Technology</h1>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row ">
        <div class="grid grid-flow-col gap-4 text-white">
          <span className="  text-2xl">tamanna202163@gmail.com || </span>
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
      </div>
    </footer>
  );
};

export default Footer;
