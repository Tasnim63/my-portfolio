import AOS from "aos";
import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import AllProjects from "../Projects/AllProjects";

const Home = () => {
  AOS.init();
  return (
    <>
      <div
        className="hero  font-serif"
        style={{
          height: 600,
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
              className="mb-5 text-5xl font-bold"
            >
              {" "}
              I AM TAMANNA
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="mb-5 text-2xl"
            >
              {" "}
              I'm React js developer...
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="1300"
              className="btn btn-outline btn-base-100 text-white"
            >
              <a href="https://drive.google.com/file/d/1Au30Db9ii9Xa8vrieO7UBncMRYgE3Uqm/view?usp=sharing">
                {" "}
                RESJUME VIEW
              </a>
            </button>
          </div>
        </div>
      </div>
      <About></About>
      <AllProjects></AllProjects>
    </>
  );
};

export default Home;
