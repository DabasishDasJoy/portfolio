import React from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import PortfolioCard from "../PorfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="bg-secondary min-h-screen py-10 px-20">
      <PageTitle subtitle={"Portfolio"}>My Works</PageTitle>
      <div className="grid">
        <PortfolioCard></PortfolioCard>
      </div>
    </div>
  );
};

export default Portfolio;