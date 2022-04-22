import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  sectionId?: string;
  className?: string;
  padding?: boolean;
}

const Section: FunctionComponent<Props> = (props) => {
  const { children, sectionId = "", className = "", padding = true } = props;

  return (
    <section id={sectionId} className={`${padding && "py-20"} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
