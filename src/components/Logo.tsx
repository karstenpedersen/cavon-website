import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {
  color?: string;
}

/* <Image
          src={logoImage}
          alt="Engdal Elevator logo"
          width={40}
          height={40}
        /> */

const Logo: FunctionComponent<Props> = ({ color = "black" }) => {
  return (
    <Link href="/">
      <a className={"flex h-full items-center gap-2 text-inherit"}>
        <p className="text-4xl font-bold uppercase text-inherit">CAVON</p>
      </a>
    </Link>
  );
};

export default Logo;
