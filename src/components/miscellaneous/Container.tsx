import { FunctionComponent, ReactNode } from "react";

interface Props {
  title?: string;
  rightElement?: ReactNode;
  children: ReactNode;
  className?: string;
  background?: string;
  containerClassName?: string;
}

const Container: FunctionComponent<Props> = (props) => {
  const {
    title = "",
    rightElement = <></>,
    children,
    className,
    background,
    containerClassName,
  } = props;

  return (
    <article
      className={`rounded p-3 text-dark-900 shadow-md last:mb-0 ${
        background ? background : "bg-dark-300"
      } ${containerClassName}`}
    >
      {title && (
        <>
          <div className="flex items-center justify-between">
            <h2 className="title">{title}</h2>
            {rightElement}
          </div>
          <hr className="mt-1 mb-3 h-[1px] border-none bg-dark-700" />
        </>
      )}
      <div className={className}>{children}</div>
    </article>
  );
};

export default Container;
