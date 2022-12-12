import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import PortfolioCard from "../PorfolioCard/PortfolioCard";
import PortfolioDetailsCard from "../PortfolioDetailsCard/PortfolioDetailsCard";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-secondary portfolio-wrapper min-h-screen py-10 px-20">
      <PageTitle subtitle={"Portfolio"}>My Works</PageTitle>
      <div className="grid grid-cols-3 gap-5">
        {[...Array(5).keys()].map((idx) => (
          <motion.div
            className="project-card"
            layoutId={idx}
            onClick={() => {
              setSelectedId(idx);
              console.log(idx);
            }}
          >
            <PortfolioCard></PortfolioCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="absolute project-details top-0 bottom-0 left-0 right-0  flex items-center justify-center backdrop-blur-md bg-accent/5"
            onClick={() => setSelectedId(null)}
          >
            <PortfolioDetailsCard></PortfolioDetailsCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
