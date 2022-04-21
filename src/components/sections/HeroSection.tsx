import Wrapper from "components/containers/layouts/Wrapper";
import ImageSection from "components/containers/pagesections/ImageSection";
import { motion } from "framer-motion";
import * as IoIcons from "react-icons/io";
import { default as heroImage } from "../../../public/images/hero.png";

const HeroSection = () => {
  return (
    <ImageSection
      image={heroImage}
      className="bg-black bg-opacity-30"
      height="h-screen"
    >
      <div className="absolute top-[15%] w-full" id="home">
        <Wrapper className="flex h-full w-full flex-col items-center gap-2 text-center text-white md:left-0 md:items-start md:text-left">
          <div className="mb-28 flex w-full flex-col items-center gap-2 md:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.15 }}
              className="title-page max-w-4xl"
            >
              Lorem ipsum dolor sit.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.15 }}
              className="max-w-xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex
              enim. Ullam sed ipsa obcaecati ipsam? Impedit, neque
              reprehenderit. Earum id, rerum neque, assumenda
            </motion.p>
          </div>

          <motion.a
            href="#buy"
            className="btn-primary !px-6 !py-3 font-semibold"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.15 }}
          >
            Buy now
          </motion.a>
        </Wrapper>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        className="absolute left-[50%] bottom-3 m-auto flex translate-x-[-50%] flex-col items-center text-white hover:text-primary"
      >
        <IoIcons.IoIosArrowDown className="animate-bounce text-6xl" />
      </motion.button>
    </ImageSection>
  );
};

export default HeroSection;
