import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero py-16 md:py-32 ld:py-44"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container px-3 mx-auto flex justify-center">
        <div className="hero-content w-full flex-col lg:flex-row-reverse justify-evenly">
          <img
            src={chair}
            className="sm:w-full md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
          <div className="p-2 bg-white shadow-md rounded-2xl border">
            <DayPicker
              className="w-full"
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
