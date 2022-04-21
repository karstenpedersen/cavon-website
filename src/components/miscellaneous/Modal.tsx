import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Modal: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <motion.div
        className="modal"
        initial={{ y: "-100vh" }}
        animate={{ y: "40vh" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
