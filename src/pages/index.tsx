import Page from "components/containers/pagelayouts/Page";
import AboutUsSection from "components/sections/AboutUsSection";
import SignUpSection from "components/sections/ContactSection";
import FeatureSection from "components/sections/FeatureSection";
import GameplaySection from "components/sections/GameplaySection";
import HeroSection from "components/sections/HeroSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page title="Cavon">
      {/* Hero section */}
      <HeroSection />

      {/* Gameplay section */}
      <GameplaySection />

      {/* Feature section */}
      <FeatureSection />

      {/* About Us section */}
      <AboutUsSection />

      {/* Sign Up section */}
      <SignUpSection />
    </Page>
  );
};

export default Home;
