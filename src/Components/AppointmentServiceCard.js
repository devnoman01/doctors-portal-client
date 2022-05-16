import React from "react";
import GradientButton from "./GradientButton";

const AppointmentServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card border border-gray-200 shadow-md">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span className="">{slots[0]}</span>
          ) : (
            <span className="text-red-600">No Slot Available</span>
          )}
        </p>
        <p className="text-sm">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions mt-2">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            className="btn btn-sm modal-button btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary"
            disabled={slots.length === 0}
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServiceCard;
