import { FunctionComponent } from "react";
import * as FaIcons from "react-icons/fa";

interface Props {
  className?: string;
  itemClassName?: string;
}

const Socials: FunctionComponent<Props> = ({ className, itemClassName }) => {
  return (
    <ul className={className}>
      <li>
        <a
          href="#"
          aria-label="Facebook"
          className={"action-text " + itemClassName}
        >
          <FaIcons.FaFacebookF />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Twitter"
          className={"action-text " + itemClassName}
        >
          <FaIcons.FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Youtube"
          className={"action-text " + itemClassName}
        >
          <FaIcons.FaYoutube />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Instagram"
          className={"action-text " + itemClassName}
        >
          <FaIcons.FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
