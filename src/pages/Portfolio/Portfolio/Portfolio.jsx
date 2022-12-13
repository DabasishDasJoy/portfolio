import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../../components/PageTitle/PageTitle";
import PortfolioCard from "../PorfolioCard/PortfolioCard";
import PortfolioDetailsCard from "../PortfolioDetailsCard/PortfolioDetailsCard";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedProject, setSelectedProject] = useState({});
  const isPresent = useIsPresent();

  const projects = useLoaderData();

  return (
    <div className="bg-secondary portfolio-wrapper min-h-screen py-10 px-20">
      <PageTitle subtitle={"Portfolio"}>My Works</PageTitle>
      <div className="grid grid-cols-2 gap-5 py-10">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            layoutId={project._id}
            onClick={() => {
              setSelectedId(project._id);
              setSelectedProject(project);
              console.log(project._id);
            }}
          >
            <PortfolioCard project={project}></PortfolioCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed project-details top-0 bottom-0 left-0 right-0  flex items-center justify-center backdrop-blur-sm bg-accent/50"
          >
            <PortfolioDetailsCard project={selectedProject}>
              <button
                className="px-4 py-2 hover:bg-primary border rounded-full"
                onClick={() => setSelectedId(null)}
              >
                X
              </button>
            </PortfolioDetailsCard>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.3, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.3, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-accent z-10"
      />
    </div>
  );
};

export default Portfolio;
