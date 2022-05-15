import React, { useState } from "react";
import Footer from "../../Components/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="">
      <AppointmentBanner />
      <AvailableAppointments date={date} setDate={setDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
