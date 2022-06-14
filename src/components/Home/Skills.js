import React from "react";
import html from "../../assets/images/html (2).png";
import css from "../../assets/images/css.png";
import bootstrap from "../../assets/images/bootstrap (2).png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import mongodb from "../../assets/images/mongodb.png";
import node from "../../assets/images/node.png";
import express from "../../assets/images/express.png";

const Skills = () => {
  return (
    <div>
      <h1 class="mb-5 text-center text-white font-serif text-3xl font-bold">
        Skills
      </h1>
      <div className="  lg:mx-28 lg:my-12 mx-3 grid grid-cols-3 lg:grid-cols-6 gap-5">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40  bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={html} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-xl text-white text-center">HTML</h2>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40  bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={css} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-xl text-white text-center">CSS</h2>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40  bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={bootstrap} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-xl text-white text-center">BOOTSTRAP</h2>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40  bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={js} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-2xl text-white text-center">JS</h2>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40 bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={react} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-2xl text-white text-center">REACT</h2>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40 bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={mongodb} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-2xl text-white text-center">MONGODB</h2>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40 bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={node} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-2xl text-white text-center">NODE JS</h2>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="card w-32 h-40 bg-slate-800 shadow-xl"
        >
          <figure>
            <img src={express} className=" mt-6 w-28 h-24" alt="Shoes" />
          </figure>
          <div>
            <h2 class="text-2xl text-white text-center">EXPRESS JS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
