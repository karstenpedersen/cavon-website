import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface NavItemProps {
  title: string;
  path: string;
  closeMenu?: () => void;
  className?: string;
}

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  const { title, path, closeMenu, className } = props;
  const router = useRouter();

  return (
    <li className="group">
      <a
        aria-label={title}
        href={path}
        onClick={() => {
          if (closeMenu) {
            closeMenu();
          }
        }}
        className={`nav-item ${
          router.asPath === path
            ? "border-b-zinc-900 text-zinc-900"
            : "border-b-white"
        } ${className}`}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
