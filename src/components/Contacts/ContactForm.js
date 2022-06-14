import React from "react";

import { BiSend } from "react-icons/bi";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div>
      <form
        action="https://formspree.io/f/xnqwrvvz"
        method="POST"
        className=" flex flex-col w-80 mx-auto p-6"
      >
        <input
          className=" p-2 my-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          name="Email"
          className=" p-2 "
          placeholder="Email"
          type="text"
          required
        />
        <input
          name="description"
          className="my-2 py-6 px-2"
          placeholder="Description"
          type="text"
          required
        />
        <button
          data-aos="zoom-in"
          className="btn btn-outline btn-base-100 my-3 text-white"
          type="submit"
        >
          Submit{" "}
          <p className="icon text-white mx-2 text-2xl">
            <BiSend></BiSend>
          </p>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
