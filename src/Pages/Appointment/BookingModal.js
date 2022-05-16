import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary mb-8">
            Booking for:{treatment.name}
          </h3>
          <form onSubmit={handleBooking}>
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full my-2"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full my-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full my-2"
            />
            <input
              readOnly
              type="submit"
              value="Submit"
              className="input input-bordered bg-accent text-white font-medium text-center uppercase w-full my-2"
            />
          </form>
          {/* <div className="modal-action">
            <label for="booking-modal" className="btn w-full">
              SUBMIT
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
