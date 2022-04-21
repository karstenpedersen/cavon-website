import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import SectionTitle from "components/miscellaneous/TitleH2";

const GameplaySection = () => {
  return (
    <Section sectionId="gameplay">
      <Wrapper className="text-white">
        <SectionTitle title="Gameplay" />
        <p>Hello</p>
      </Wrapper>
    </Section>
  );
};

export default GameplaySection;
