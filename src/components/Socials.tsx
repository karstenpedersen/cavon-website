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
        <a href="#" className={"action-text " + itemClassName}>
          <FaIcons.FaFacebookF />
        </a>
      </li>
      <li>
        <a href="#" className={"action-text " + itemClassName}>
          <FaIcons.FaTwitter />
        </a>
      </li>
      <li>
        <a href="#" className={"action-text " + itemClassName}>
          <FaIcons.FaYoutube />
        </a>
      </li>
      <li>
        <a href="#" className={"action-text " + itemClassName}>
          <FaIcons.FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
