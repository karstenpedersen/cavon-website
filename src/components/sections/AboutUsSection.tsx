import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import SectionTitle from "components/miscellaneous/TitleH2";

const AboutUsSection = () => {
  return (
    <Section sectionId="about-us">
      <Wrapper className="text-white">
        <SectionTitle title="About Us" />
        <p>Hello</p>
      </Wrapper>
    </Section>
  );
};

export default AboutUsSection;
