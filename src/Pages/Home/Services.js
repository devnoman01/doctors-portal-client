import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust ipsum has been the",
      img: whitening,
    },
  ];

  return (
    <div className="container mx-auto my-28 px-3">
      <div className="my-16 text-center">
        <h2 className="text-secondary text-xl font-bold uppercase">
          Our Services
        </h2>
        <h1 className="text-4xl mt-3">Services We Provide</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
