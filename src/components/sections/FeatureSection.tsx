import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import Image from "next/image";
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
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={swordImage} alt="image" width={50} height={50} />

            <h3 className="title-3">Combat</h3>
            <p>Fight through hordes of various enemies.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={mapImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Explore</h3>
            <p>Explore the vast depths of the caves.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={mayorImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Interact</h3>
            <p>Interact with the many different NPCs of the world.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={heartImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Collect</h3>
            <p>Collect and use 60+ items to help explore the depths.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={diceImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Challenge</h3>
            <p>Face harsh and challenging bosses.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={manaImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Learn</h3>
            <p>Gain the knowledge of the world of Cavon.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={playerImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Customize</h3>
            <p>Outfit your character with vanity items.</p>
          </div>
          <div className="rounded bg-surface p-2 text-on-surface">
            <Image src={bombImage} alt="image" width={50} height={50} />
            <h3 className="title-3">Enhance </h3>
            <p>Build an arsenal worthy of facing titans.</p>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default FeatureSection;
