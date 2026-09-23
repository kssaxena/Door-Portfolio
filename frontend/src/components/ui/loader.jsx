import { motion } from "framer-motion";

const PageTransition = ({ isExiting }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#26211C] z-[9999]"
      initial={{ x: "100%" }}
      animate={{ x: isExiting ? "-100%" : "0%" }}
      transition={{
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
      }}
    />
  );
};

export default PageTransition;
