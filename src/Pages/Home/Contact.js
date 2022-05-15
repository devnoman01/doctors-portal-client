import React from "react";
import appointment from "../../assets/images/appointment.png";
import GradientButton from "../../Components/GradientButton";

const Contact = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="">
      <div className="container mx-auto my-24 px-3">
        <div className="w-full md:w-2/3 lg:w-3/5 xl:w-2/5 mx-auto py-16">
          <h4 className="text-center text-secondary text-xl font-semibold">
            Contact Us
          </h4>
          <h3 className="text-center text-white text-3xl xl:text-4xl mt-3">
            Stay Connected with us
          </h3>
          <div className="my-8">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-accent w-full my-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent w-full my-2"
            />
            <textarea
              className="textarea textarea-accent my-2 w-full h-28"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <GradientButton>Get Started</GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
