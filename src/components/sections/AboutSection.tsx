import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";

const AboutSection = () => {
  return (
    <Section sectionId="about">
      <Wrapper className="text-center text-white">
        <h1 className="title-1">About Cavon</h1>
        <p className="mx-auto max-w-lg">
          Cavon is a 3D rogue-lite dungeon crawler with a cute and a slight
          retro theme and look to it, but with gameplay that has been refined to
          give players just as much of an experience as modern games.
        </p>
        <div className="grid gap-10 py-10 md:grid-cols-2">
          <div className="space-y-2">
            <h2 className="title-2">Discover items</h2>
            <p className="mx-auto max-w-lg">
              Find a plentitude of items and equipment, with over 60+ unique
              items and a multitude of abilities, giving you freedom over how to
              approach any challenge in the game.
            </p>
          </div>
          <div>
            <h2 className="title-2">UNLOCK UPGRADES</h2>
            <p className="mx-auto max-w-lg">
              Make use of your abilities and enhance them even further. With a
              variety of upgrades and different materials you can find hidden in
              the corner of every stage, you can quickly get lost in the
              potential.
            </p>
          </div>
          <div>
            <h2 className="title-2">EXPLORE WORLDS</h2>
            <p className="mx-auto max-w-lg">
              Learn about the underground society of Cavon and the truth to the
              overground. With the layers that you traverse deeper and deeper,
              it will only make you question what made them seek the depths.
            </p>
          </div>
          <div>
            <h2 className="title-2">ENDLESS LEVELS</h2>
            <p className="mx-auto max-w-lg">
              If you haven’t had enough of the game, you find yourself in luck
              as the game features an infinite amount of levels that will never
              be the same. With the amount of challenges constantly changing,
              nothing will be identical.
            </p>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
