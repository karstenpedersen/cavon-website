import { FunctionComponent } from "react";
import NavItem from "./NavItem";

interface Props {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  buttonClassName?: string;
  closeMenu?: () => void;
  mobile?: boolean;
}

const Navigation: FunctionComponent<Props> = (props) => {
  const {
    className,
    listClassName,
    closeMenu = () => {},
    itemClassName,
    buttonClassName,
  } = props;

  return (
    <nav aria-label="main navigation" className={className}>
      <ul className={listClassName}>
        <NavItem
          title="Home"
          path="#home"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="Gameplay"
          path="#gameplay"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="About Us"
          path="#about-us"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="Contact"
          path="#contact"
          closeMenu={closeMenu}
          className={itemClassName}
        />
      </ul>
      <a
        href="#buy-cavon"
        className={`btn-primary cursor-pointer px-12 ${buttonClassName}`}
        onClick={() => {
          closeMenu();
        }}
      >
        Buy now
      </a>
    </nav>
  );
};

export default Navigation;
