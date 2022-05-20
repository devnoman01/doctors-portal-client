import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("https://young-thicket-64286.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "Appointment Booked",
            html: "Thanks for your booking",
            icon: "success",
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "Already Booked",
            text: `Already booked for ${booking?.treatment} on ${formattedDate} at ${booking?.slot} `,
            icon: "info",
            showConfirmButton: false,
          });
        }
        refetch();
        // set null to close the modal
        setTreatment(null);
      });
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
          <h3 className="font-medium text-lg text-secondary mb-8">
            Booking for: {treatment.name}
          </h3>
          <form onSubmit={handleBooking}>
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full my-2"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              disabled
              type="text"
              value={user?.displayName}
              className="input input-bordered w-full my-2"
            />
            <input
              disabled
              type="email"
              value={user?.email}
              className="input input-bordered w-full my-2"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
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
