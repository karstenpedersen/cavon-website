import { FunctionComponent } from "react";

interface Props {
  className?: string;
}

const Splitter: FunctionComponent<Props> = (props) => {
  const { children, className = "" } = props;

  return (
    <div
      className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Splitter;
