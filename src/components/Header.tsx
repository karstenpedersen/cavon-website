import useScroll from "hooks/useScroll";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import Wrapper from "./containers/layouts/Wrapper";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState(
    "bg-transparent text-white"
  );

  function handleMobile() {
    setMobile(!mobile);
  }

  useScroll((callbackData: any) => {
    const { scroll, lastScroll } = callbackData;

    if (scroll > 300) {
      setBackgroundColor("bg-white text-dark-900 shadow-md");
    } else {
      setBackgroundColor("bg-transparent text-white");
    }

    setHidden(lastScroll < scroll && window.scrollY > 90);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 h-[90px] w-full transition-all duration-300 ${
          hidden && "top-[calc(-1*var(--header-height))]"
        } ${backgroundColor}`}
      >
        {/* Header */}
        <Wrapper className="flex h-full !max-w-full items-center justify-between gap-8 whitespace-nowrap text-inherit">
          <Logo />

          <Navigation
            className="hidden flex-shrink items-center gap-12 lg:flex"
            listClassName="flex gap-8 items-center"
            itemClassName="h-[55px] flex items-center"
          />

          <FaIcons.FaBars
            className="action-text text-4xl lg:hidden"
            role="button"
            onClick={() => {
              handleMobile();
            }}
          />
        </Wrapper>
      </header>

      {/* Mobile navbar */}
      <MobileNav mobile={mobile} handleMobile={handleMobile} />
    </>
  );
};

export default Header;
