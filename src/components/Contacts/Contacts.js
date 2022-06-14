import React from "react";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <div>
      <div
        class="hero "
        style={{
          height: 500,
          backgroundImage: `url(https://img.freepik.com/free-photo/top-view-laptop-mouse-with-technology-icons_1134-59.jpg?t=st=1653605900~exp=1653606500~hmac=a58330ebc540c6f03d226a24e521a8004e7016848bf7b66ed4a20de91870c16c&w=740)`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 data-aos="zoom-in" class="mb-5 text-5xl text-white font-bold">
              Lets Have a Chat
            </h1>
          </div>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contacts;
