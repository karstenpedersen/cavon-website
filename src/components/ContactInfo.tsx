import { FunctionComponent } from "react";
import * as FaIcons from "react-icons/fa";

interface Props {
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}

const ContactInfo: FunctionComponent<Props> = ({
  className,
  itemClassName,
  iconClassName,
}) => {
  return (
    <div className={className}>
      <a href="#" className={`action-text max-w-max ${itemClassName}`}>
        <FaIcons.FaPhoneAlt className={iconClassName} />
        <p>+45 00 00 00 00</p>
      </a>
      <a href="#" className={`action-text max-w-max ${itemClassName}`}>
        <FaIcons.FaEnvelope className={iconClassName} />
        <p>engdal@engdal.dk</p>
      </a>
    </div>
  );
};

export default ContactInfo;
