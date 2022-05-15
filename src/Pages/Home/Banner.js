import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import GradientButton from "../../Components/GradientButton";

const Banner = () => {
  return (
    <div
      className="hero py-16 md:py-32 ld:py-44"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container px-3 mx-auto flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="px-2 py-1">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <GradientButton>Get Started</GradientButton>
            {/* <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
