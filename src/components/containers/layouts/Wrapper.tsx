import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  background?: string;
}

const Wrapper: FunctionComponent<Props> = ({
  children,
  className,
  background,
}) => {
  return (
    <div
      className={`h-full w-full ${
        background === "" ? "bg-inherit" : background
      }`}
    >
      <div className={`mx-auto h-full w-[90vw] max-w-[75rem] ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
