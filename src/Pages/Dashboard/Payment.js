import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1zDJBLfT2oW3Ohm010AmVrFhEILcsnn7Ht9syssT3NJWahsedONCkMWlqQT9XKlHoV9tVXv4AEtHqCwEGDtVjs00Ve8UYKvJ"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://young-thicket-64286.herokuapp.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="mt-6 mb-4 text-xl font-medium">Payment Portal</h2>
      <h4 className="">
        Appointment/Payment ID: <b>{id}</b>
      </h4>

      <div className="card bg-base-100 max-w-md shadow-md my-5">
        <div className="card-body">
          <p className="text-md">
            Hello <b className="text-green-600">{appointment.patientName}</b>
          </p>
          <p>
            <small>{appointment.patient}</small>
          </p>
          <p className="card-title">Please pay for: {appointment.treatment}</p>
          <p>
            Your schedule:{" "}
            <span className="font-medium text-green-600">
              {appointment.date} at {appointment.slot}
            </span>
          </p>
          <p>
            Please pay:{" "}
            <span className="font-medium text-green-600">
              ${appointment.price}
            </span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 max-w-md mb-5 shadow-md bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
