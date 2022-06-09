import React from "react";
import AllProjects from "./AllProjects";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div
        class="hero "
        style={{
          height: 600,
          backgroundImage: `url(https://img.freepik.com/free-photo/technology-connection-online-networking-medias-conpt_53876-64965.jpg?w=1380&t=st=1653624658~exp=1653625258~hmac=87c376e754ffb8f8e17693277f8a33b3fa950365490581f5a2dd91623c8c40bc)`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1
              data-aos="zoom-in-right"
              data-aos-delay="1500"
              class="mb-5 text-5xl font-bold"
            >
              PROJRCTS
            </h1>
            <h4 class="mb-5 text-2xl">Some Of My Projects</h4>
          </div>
        </div>
      </div>
      <AllProjects></AllProjects>
    </>
  );
};

export default Projects;
