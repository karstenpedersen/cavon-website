import Link from "next/link";
import { FunctionComponent } from "react";
import Wrapper from "./containers/layouts/Wrapper";
import Logo from "./Logo";
import MoveToTop from "./MoveToTop";
import Navigation from "./Navigation";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="pt-6">
        <Wrapper className="flex items-center justify-between">
          <Logo color="white" />
          <MoveToTop />
        </Wrapper>
      </div>

      <Wrapper className="pb-6 pt-8">
        <div className="flex items-center justify-between py-6">
          <Navigation
            listClassName="flex gap-3"
            itemClassName="!font-normal"
            buttonClassName="hidden"
          />
          <Socials className="flex gap-3" itemClassName="text-2xl" />
        </div>
      </Wrapper>

      <Wrapper className="pt-3 pb-6 text-center text-sm text-dark-700">
        <p className="text-inherit">
          Copyright © 2022 |{" "}
          <a href="#home" className="link">
            Cavon
          </a>{" "}
          | Teknikervej 2
        </p>
      </Wrapper>
    </footer>
  );
};

interface ItemProps {
  title: string;
  path: string;
}

const LinkItem: FunctionComponent<ItemProps> = ({ title, path }) => {
  return (
    <li>
      <Link href={path}>
        <a className="link">{title}</a>
      </Link>
    </li>
  );
};

export default Footer;
