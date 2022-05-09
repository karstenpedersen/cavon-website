import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import FeatureCard from "components/FeatureCard";
import bombImage from "../../../public/images/icons/Bomb.png";
import diceImage from "../../../public/images/icons/Dice.png";
import heartImage from "../../../public/images/icons/FullHeart.png";
import manaImage from "../../../public/images/icons/FullMana.png";
import playerImage from "../../../public/images/icons/MagePlayer.png";
import mapImage from "../../../public/images/icons/Map.png";
import mayorImage from "../../../public/images/icons/Mayor.png";
import swordImage from "../../../public/images/icons/Sword.png";

const FeatureSection = () => {
  return (
    <Section sectionId="features">
      <Wrapper className="text-center text-white">
        <h1 className="title-1">Key Features</h1>
        <div className="grid gap-6 md:grid-cols-4">
          <FeatureCard
            image={swordImage}
            title="Combat"
            description="Fight through hordes of various enemies."
          />
          <FeatureCard
            image={mapImage}
            title="Explore"
            description="Explore the vast depths of the caves."
          />
          <FeatureCard
            image={mayorImage}
            title="Interact"
            description="Interact with the many different NPCs of the world."
          />
          <FeatureCard
            image={heartImage}
            title="Collect"
            description="Collect and use 60+ items to help explore the depths."
          />
          <FeatureCard
            image={diceImage}
            title="Challenge"
            description="Face harsh and challenging bosses."
          />
          <FeatureCard
            image={manaImage}
            title="Learn"
            description="Gain the knowledge of the world of Cavon."
          />
          <FeatureCard
            image={playerImage}
            title="Customize"
            description="Outfit your character with vanity items."
          />
          <FeatureCard
            image={bombImage}
            title="Enhance"
            description="Build an arsenal worthy of facing titans."
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default FeatureSection;
