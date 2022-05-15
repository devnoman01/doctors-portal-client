import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentServiceCard from "../../Components/AppointmentServiceCard";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-24 px-3">
      <h4 className="text-2xl text-center text-secondary">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {services.map((service) => (
          <AppointmentServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} />}
    </div>
  );
};

export default AvailableAppointments;
