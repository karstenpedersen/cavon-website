import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Section from "./Section";

interface Props {
  image: StaticImageData;
  children?: ReactNode;
  className?: string;
  height?: string;
  sectionId?: string;
}

const ImageSection: ComponentType<Props> = ({
  image,
  children,
  className,
  height = "",
  sectionId,
}) => {
  return (
    <Section padding={false} sectionId={sectionId}>
      <div className={`relative w-full ${height}`}>
        <Image src={image} alt="Image" className="image" layout="fill" />
        <div className={`absolute h-full w-full ${className}`}>{children}</div>
      </div>
    </Section>
  );
};

export default ImageSection;
