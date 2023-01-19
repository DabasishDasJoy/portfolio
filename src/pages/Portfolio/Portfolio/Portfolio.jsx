import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../../components/PageTitle/PageTitle";
import PortfolioCard from "../PorfolioCard/PortfolioCard";
import PortfolioDetailsCard from "../PortfolioDetailsCard/PortfolioDetailsCard";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = useLoaderData();

  return (
    <div className="bg-secondary portfolio-wrapper min-h-screen section">
      <PageTitle subtitle={"Portfolio"}>My Works</PageTitle>
      <div className="grid lg:grid-cols-3 gap-5">
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
              <div className="border rounded-full">
                <button
                  className="hover:bg-primary rounded-full px-3 py-1"
                  onClick={() => setSelectedId(null)}
                >
                  x
                </button>
              </div>
            </PortfolioDetailsCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
