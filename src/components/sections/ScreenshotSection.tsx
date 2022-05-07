import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/ImageCarousel";
import Screenshot from "components/Screenshot";
import { SwiperSlide } from "swiper/react";
import image2 from "../../../public/images/gameplay/enemy_room.png";
import image3 from "../../../public/images/gameplay/main_menu.png";
import image1 from "../../../public/images/gameplay/player.png";
import image4 from "../../../public/images/gameplay/shop.png";
import image5 from "../../../public/images/gameplay/wizard_npc.png";

const ScreenshotSection = () => {
  return (
    <Section
      sectionId="screenshots"
      className="bg-surface py-10 text-on-surface"
      padding={false}
    >
      <Wrapper>
        <ImageCarousel>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image5} />
          </SwiperSlide>
        </ImageCarousel>
      </Wrapper>
    </Section>
  );
};

export default ScreenshotSection;
