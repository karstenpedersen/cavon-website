import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import logoImage from "../../public/images/pickaxe.png";

interface Props {
  color?: string;
}

const Logo: FunctionComponent<Props> = ({ color = "black" }) => {
  return (
    <Link href="/">
      <a className={"flex h-full items-center gap-2 text-inherit"}>
        <Image
          src={logoImage}
          alt="Engdal Elevator logo"
          width={50}
          height={50}
        />
        <p className="text-4xl font-bold uppercase text-inherit">CAVON</p>
      </a>
    </Link>
  );
};

export default Logo;
