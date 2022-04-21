import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
  path: string;
}

const ServiceCard: FunctionComponent<Props> = (props) => {
  const { title, description, image, path } = props;

  return (
    <Link href={path}>
      <a className="group h-[400px] overflow-hidden rounded bg-white shadow-lg transition-all duration-200">
        <div className="relative h-[100%] w-full transition-all">
          <Image
            src={image}
            alt="Image"
            layout="fill"
            className="object-cover transition-all group-hover:scale-125"
          />
          <div className="absolute top-0 left-0 flex h-full w-full justify-center bg-black bg-opacity-20 p-2 text-center">
            <h4 className="absolute self-center text-2xl font-bold uppercase text-white transition-all sm:text-3xl md:text-2xl lg:text-3xl ">
              {title}
            </h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ServiceCard;
