import Image from "next/image";
import { FunctionComponent } from "react";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
}

const FeatureCard: FunctionComponent<Props> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="rounded bg-surface p-2 text-on-surface">
      <Image src={image} alt="image" width={50} height={50} />
      <h2 className="title-3">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
