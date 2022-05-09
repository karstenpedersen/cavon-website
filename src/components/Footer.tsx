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
          <Logo />
          <MoveToTop />
        </Wrapper>
      </div>

      <Wrapper className="pb-6 pt-8">
        <div className="flex flex-col-reverse items-center justify-between gap-10 py-6 sm:flex-row">
          <Navigation
            listClassName="flex gap-3"
            itemClassName="!font-normal"
            buttonClassName="hidden"
          />
          <Socials className="flex gap-3" itemClassName="text-3xl" />
        </div>
      </Wrapper>

      <Wrapper className="pt-3 pb-6 text-center text-sm text-dark-700">
        <p className="text-inherit">
          Copyright © 2022 |{" "}
          <a href="#home" aria-label="Go to top of the page" className="link">
            Cavon
          </a>{" "}
          | Teknikervej 2
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
