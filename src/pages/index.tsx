import Page from "components/containers/pagelayouts/Page";
import AboutUsSection from "components/sections/AboutUsSection";
import GameplaySection from "components/sections/GameplaySection";
import HeroSection from "components/sections/HeroSection";
import ScreenshotSection from "components/sections/ScreenshotSection";
import SignUpSection from "components/sections/SignUpSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page title="Cavon">
      {/* Hero section */}
      <HeroSection />

      {/* Gameplay section */}
      <GameplaySection />

      {/* Screenshot section */}
      <ScreenshotSection />

      {/* About Us section */}
      <AboutUsSection />

      {/* Sign Up section */}
      <SignUpSection />
    </Page>
  );
};

export default Home;
