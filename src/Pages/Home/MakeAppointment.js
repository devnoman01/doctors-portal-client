import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import GradientButton from "../../Components/GradientButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="">
      <div className="container mx-auto my-24 flex justify-center items-center px-3">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 my-24 md:my-0">
          <h4 className="text-secondary text-xl font-semibold">Appointment</h4>
          <h3 className="text-white text-3xl font-semibold my-4">
            Make an Appointment Today
          </h3>
          <p className="text-white mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <GradientButton>Get Started</GradientButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
