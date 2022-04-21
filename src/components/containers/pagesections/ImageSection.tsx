import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Section from "./Section";

interface Props {
  image: StaticImageData;
  children?: ReactNode;
  className?: string;
  height?: string;
}

const ImageSection: ComponentType<Props> = ({
  image,
  children,
  className,
  height = "",
}) => {
  return (
    <Section padding={false}>
      <div className={`relative w-full ${height}`}>
        <Image src={image} alt="hero image" className="image" layout="fill" />
        <div className={`absolute h-full w-full ${className}`}>{children}</div>
      </div>
    </Section>
  );
};

export default ImageSection;
