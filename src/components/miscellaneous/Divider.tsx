import { FunctionComponent, ReactNode } from "react";

interface Props {
  className?: string;
}

const Divider: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <hr
      className={
        "mx-auto h-[1px] rounded-full border-none bg-zinc-700 " + className
      }
    />
  );
};

export default Divider;
