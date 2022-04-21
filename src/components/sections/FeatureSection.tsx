import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/ImageCarousel";

const FeatureSection = () => {
  return (
    <Section sectionId="about-us" className="bg-surface text-on-surface">
      <Wrapper>
        <ImageCarousel>
          <div></div>
        </ImageCarousel>
      </Wrapper>
    </Section>
  );
};

export default FeatureSection;
