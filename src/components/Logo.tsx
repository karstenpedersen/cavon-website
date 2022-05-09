import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/images/pickaxe.png";

const Logo = () => {
  return (
    <Link href="/">
      <a
        aria-label="Go to home page"
        className={"flex h-full items-center gap-2 text-inherit"}
      >
        <Image src={logoImage} alt="Cavon logo" width={50} height={50} />
        <p className="text-4xl font-bold uppercase text-inherit">CAVON</p>
      </a>
    </Link>
  );
};

export default Logo;
