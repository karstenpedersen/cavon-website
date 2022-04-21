import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const BreakSection = ({ className, children }: Props) => {
  return <div className={`py-6 ${className}`}>{children}</div>;
};

export default BreakSection;
