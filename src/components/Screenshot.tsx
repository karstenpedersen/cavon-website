import Image from "next/image";
import { FunctionComponent } from "react";

interface Props {
  image: StaticImageData;
}

const Screenshot: FunctionComponent<Props> = ({ image }) => {
  return (
    <div className="h-[250px] w-[200px]">
      <Image src={image} alt="Image" layout="fill" className="object-cover" />
    </div>
  );
};

export default Screenshot;
