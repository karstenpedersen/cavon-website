import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import * as FaIcons from "react-icons/fa";
import Backdrop from "./miscellaneous/Backdrop";
import Navigation from "./Navigation";

interface Props {
  mobile: boolean;
  handleMobile: Function;
}

const MobileNav: FunctionComponent<Props> = ({ mobile, handleMobile }) => {
  return (
    <AnimatePresence>
      {mobile && (
        <>
          <Backdrop
            onClick={() => {
              handleMobile();
            }}
          />

          <motion.div
            className={`fixed top-0 right-0 z-50 flex h-full w-full flex-col gap-2 bg-black shadow-lg sm:w-4/5`}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "tween" }}
          >
            <div className="flex h-[90px] w-full flex-row-reverse items-center">
              <FaIcons.FaTimes
                className="action-text mr-[1.25rem] text-4xl text-white"
                role="button"
                onClick={() => {
                  handleMobile();
                }}
              />
            </div>

            <Navigation
              className="flex h-full flex-col gap-8 px-[1.25rem] text-center text-white"
              listClassName="flex flex-col font-bold gap-8 mb-10"
              itemClassName="!text-2xl mx-auto"
              buttonClassName="!text-xl max-w-[400px] mx-auto"
              closeMenu={() => {
                handleMobile();
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
