import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero  my-16 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.freepik.com/free-photo/coding-man_1098-19922.jpg?t=st=1653617245~exp=1653617845~hmac=7cce0f1e79dde1bfffaf8cc6cb311cad0154804fbb55323fecccfa4957a77706&w=1380"
            alt="developer"
            className="max-w-screen-sm rounded-lg shadow-2xl"
          />
          <div className=" px-16">
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-5xl font-bold font-serif  text-white"
            >
              About Me
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="900"
              className="py-6 text-xl  text-white font-bold"
            >
              I am a junior MERN-stack web developer with solid knowledge in
              different technologies & enough experience in creating & designing
              super responsive websites.
              <br />I am comfort in Html 5 , CSS 3,tailwind,daisyUi components ,
              Bootstrap 5 , JavaScript, ES6, Rest API, React JS React Bootstrap,
              React Router, Firebase Authentication ,node js ,mongodb and
              express js.
            </p>
            <div>
              <button
                data-aos="zoom-in"
                data-aos-delay="1300"
                className="btn btn-outline btn-base-100 text-white mx-4"
              >
                HIRE ME
              </button>
              <button
                data-aos="zoom-in"
                data-aos-delay="1500"
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
      </div>
    </div>
  );
};

export default About;
