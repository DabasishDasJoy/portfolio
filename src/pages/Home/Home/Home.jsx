import { motion, useIsPresent } from "framer-motion";
import React from "react";
import Introduction from "../Introduction/Introduction";
import MyImage from "../MyImage/MyImage";

const Home = () => {
  const isPresent = useIsPresent();

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="min-h-screen bg-black grid gap-10 px-5 lg:grid-cols-7 overflow-hidden"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        className="flex items-end col-span-3"
      >
        <MyImage></MyImage>
      </motion.div>

      <div className="flex items-center col-span-4">
        <Introduction></Introduction>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.3, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.3, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-accent z-10"
      />
    </motion.div>
  );
};

export default Home;
