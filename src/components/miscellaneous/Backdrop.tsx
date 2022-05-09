import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface Props {
  onClick: Function;
}

const Backdrop: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 z-50 h-full w-full bg-black`}
      role="button"
      aria-label="Close menu"
      onClick={() => {
        onClick();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
    />
  );
};

export default Backdrop;
