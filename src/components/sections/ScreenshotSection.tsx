import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/ImageCarousel";
import Screenshot from "components/Screenshot";
import { SwiperSlide } from "swiper/react";
import image1 from "../../../public/images/hero.png";

const ScreenshotSection = () => {
  return (
    <Section sectionId="about-us" className="bg-surface text-on-surface">
      <Wrapper>
        <ImageCarousel>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
        </ImageCarousel>
      </Wrapper>
    </Section>
  );
};

export default ScreenshotSection;
