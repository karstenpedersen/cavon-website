import Page from "components/containers/pagelayouts/Page";
import ImageSection from "components/containers/pagesections/ImageSection";
import type { NextPage } from "next";
import Link from "next/link";
import { default as heroImage } from "../../public/images/hero.png";

const Custom404: NextPage = () => {
  return (
    <Page title="Cavon | 404">
      <ImageSection
        image={heroImage}
        className="bg-black bg-opacity-50"
        height="h-screen"
        sectionId="top"
      >
        <div className="absolute left-[50%] bottom-[50%] m-auto translate-x-[-50%] space-y-6 text-center text-white">
          <p className="text-3xl font-bold">ERROR 404</p>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Link href="/">
              <a className="btn-primary text-xl">Go Back</a>
            </Link>
          </div>
        </div>
      </ImageSection>
    </Page>
  );
};

export default Custom404;
