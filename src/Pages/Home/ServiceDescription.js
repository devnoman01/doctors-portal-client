import React from "react";
import treatment from "../../assets/images/treatment.png";
import GradientButton from "../../Components/GradientButton";

const ServiceDescription = () => {
  return (
    <div className="container mx-auto">
      <div className="hero pt-10 pb-24">
        <div className="hero-content flex-col lg:flex-row md:gap-16 lg:gap-24 xl:gap-36">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="sm:max-w-sm md:max-w-md lg:max-w-lg justify-end">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <GradientButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
