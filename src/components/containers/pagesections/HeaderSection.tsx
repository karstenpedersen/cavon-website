import { ComponentType, ReactNode } from "react";
import Wrapper from "../layouts/Wrapper";
import ImageSection from "./ImageSection";

interface Props {
  image: StaticImageData;
  children?: ReactNode;
  className?: string;
}

const HeaderSection: ComponentType<Props> = ({
  image,
  children,
  className,
}) => {
  return (
    <ImageSection
      image={image}
      height="h-[150px] md:h-[200px]"
      className={`bg-black bg-opacity-10 ${className}`}
    >
      <Wrapper className="flex items-center justify-center md:justify-start">
        {children}
      </Wrapper>
    </ImageSection>
  );
};

export default HeaderSection;
