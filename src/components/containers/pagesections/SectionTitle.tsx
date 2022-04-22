import Divider from "components/miscellaneous/Divider";
import { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  divider?: boolean;
}

const SectionTitle = ({
  title,
  description,
  className,
  children,
  divider,
}: Props) => {
  return (
    <div className="mb-6 space-y-2 ">
      <div className={`flex items-center justify-between  ${className}`}>
        <h1 className="title-1 bg-blue-300">{title}</h1>
        {children}
      </div>
      {description && <p className="mb-2 text-zinc-500">{description}</p>}
      {divider && <Divider className="h-[3px] w-full bg-[#ececec]" />}
    </div>
  );
};

export default SectionTitle;
