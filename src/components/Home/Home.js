import AOS from "aos";
import React from "react";
import resume from "../../assets/resume/Tamanna.docx (5).pdf";
import About from "../About/About";
import AllProjects from "../Projects/AllProjects";
import Skills from "./Skills";

const Home = () => {
  AOS.init();
  return (
    <>
      <div
        className="hero  font-serif"
        style={{
          height: 500,
          backgroundImage: `url(https://img.freepik.com/free-photo/computer-programmer-using-laptop_53876-96073.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mb-5 text-5xl text-white font-bold"
            >
              {" "}
              I AM TAMANNA
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="mb-5 text-white text-2xl"
            >
              {" "}
              I'm Junior MERN-stack developer...
            </p>
            <a href={resume} download>
              <button
                data-aos="zoom-in"
                data-aos-delay="1300"
                className="btn btn-outline btn-base-100 text-white"
              >
                {" "}
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <AllProjects></AllProjects>
    </>
  );
};

export default Home;
