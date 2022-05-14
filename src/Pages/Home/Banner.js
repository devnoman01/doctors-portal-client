import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero py-48 px-5" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
        <div className="px-2 py-1">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
