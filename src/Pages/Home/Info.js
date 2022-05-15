import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "../../Components/InfoCard";

const Info = () => {
  const infos = [
    {
      _id: 1,
      icon: clock,
      title: "Opening Hours",
      description: "Available 10AM - 8PM",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      _id: 2,
      icon: marker,
      title: "Visit Our Location",
      description: "Brooklyn, NY 10036",
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      icon: phone,
      title: "Contact Us Now",
      description: "+000 123 456789",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="container mx-auto mb-5 px-3">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infos.map((info) => (
          <InfoCard key={info._id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Info;
