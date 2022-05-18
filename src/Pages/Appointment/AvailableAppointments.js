import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AppointmentServiceCard from "../../Components/AppointmentServiceCard";
import Loading from "../../Components/Loading";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date, setDate }) => {
  // const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);

  return (
    <div className="container mx-auto my-24 px-3">
      <h4 className="text-2xl px-8 text-center text-secondary">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {services?.map((service) => (
          <AppointmentServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
