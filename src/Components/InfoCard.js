import React from "react";

const InfoCard = ({ info }) => {
  const { icon, title, description, bgClass } = info;
  return (
    <div
      className={`card lg:card-side bg-base-100 bg-accent shadow-xl ${bgClass}`}
    >
      <figure className="pl-5 pt-8 mx-auto md:pt-8 lg:pt-1">
        <img className="max-w-xs" src={icon} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
