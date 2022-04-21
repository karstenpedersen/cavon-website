import { ReactNode } from "react";
import HeaderSection from "../pagesections/HeaderSection";
import Page from "./Page";

interface Props {
  children: ReactNode;
  metaTitle?: string;
  title: string;
  description?: string;
  image: StaticImageData;
}

const TitlePage = ({
  children,
  metaTitle,
  title,
  description,
  image,
}: Props) => {
  return (
    <Page title={metaTitle ? metaTitle : `${title} | Engdal Elevator`}>
      {/* Top sektion */}
      <HeaderSection image={image}>
        <p className="title-page">{title}</p>
      </HeaderSection>

      {/* Side indhold */}
      {children}
    </Page>
  );
};

export default TitlePage;
