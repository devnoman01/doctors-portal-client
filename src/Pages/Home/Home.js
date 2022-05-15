import React from "react";
import InfoCard from "../../Components/InfoCard";
import Banner from "./Banner";
import ServiceDescription from "./ServiceDescription";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-3">
      <Banner />
      <Info />
      <Services />
      <ServiceDescription />
    </div>
  );
};

export default Home;
