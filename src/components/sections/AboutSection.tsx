import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";

const AboutSection = () => {
  return (
    <Section sectionId="about-cavon">
      <Wrapper className="text-center text-white">
        <h1 className="title-1">About Cavon</h1>
        <p className="mx-auto max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          repellendus possimus, consectetur corrupti sint. Laudantium ullam
          inventore quas iste?
        </p>
        <div className="grid gap-10 py-10 md:grid-cols-2">
          <div className="space-y-2">
            <h2 className="title-2">Discover items</h2>
            <p className="mx-auto max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda voluptates, aut itaque recusandae fuga reprehenderit
              quas quia numquam dolor cumque.
            </p>
          </div>
          <div>
            <h2 className="title-2">UNLOCK UPGRADES</h2>
            <p className="mx-auto max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda voluptates, aut itaque recusandae fuga reprehenderit
              quas quia numquam dolor cumque.
            </p>
          </div>
          <div>
            <h2 className="title-2">EXPLORE WORLDS</h2>
            <p className="mx-auto max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda voluptates, aut itaque recusandae fuga reprehenderit
              quas quia numquam dolor cumque.
            </p>
          </div>
          <div>
            <h2 className="title-2">ENDLESS LEVELS</h2>
            <p className="mx-auto max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda voluptates, aut itaque recusandae fuga reprehenderit
              quas quia numquam dolor cumque.
            </p>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
