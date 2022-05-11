import ImageSection from "components/containers/pagesections/ImageSection";
import { default as heroImage } from "../../../public/images/hero.png";

const HeroSection = () => {
  return (
    <ImageSection
      image={heroImage}
      className="bg-black bg-opacity-50"
      height="h-screen"
      sectionId="top"
    >
      <div className="absolute left-[50%] bottom-[40%] m-auto translate-x-[-50%] space-y-6 text-center text-white sm:bottom-10">
        <p className="text-3xl font-bold">AVAILABLE NOW</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <button aria-label="Go to Steam page" className="btn-primary text-xl">
            BUY STEAM
          </button>
          <button
            aria-label="Go to Epic Store page"
            className="btn-primary text-xl"
          >
            BUY EPIC
          </button>
        </div>
      </div>
    </ImageSection>
  );
};

export default HeroSection;
