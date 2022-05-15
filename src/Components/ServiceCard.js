import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="card border border-gray-200 bg-base-100 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-xs font-semibold text-accent leading-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
