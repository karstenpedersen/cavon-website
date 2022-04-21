import { motion } from "framer-motion";

const SkipNavigationPopUp = () => {
  return (
    <motion.a
      href="#main-content"
      className="absolute top-[90px] rounded-br-lg bg-primary px-[1.25rem] py-1 text-white shadow-md"
      initial={{ x: "-100vw" }}
      whileFocus={{
        x: 0,
      }}
      transition={{ stiffness: 100 }}
    >
      Skip navigation
    </motion.a>
  );
};

export default SkipNavigationPopUp;
