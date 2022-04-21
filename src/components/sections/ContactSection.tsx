import Wrapper from "components/containers/layouts/Wrapper";
import ImageSection from "components/containers/pagesections/ImageSection";
import { default as heroImage } from "../../../public/images/hero.png";
const SignUpSection = () => {
  return (
    <ImageSection
      image={heroImage}
      className="bg-black bg-opacity-30"
      height="h-[500px]"
    >
      <div className="absolute top-[50%] w-full translate-y-[-50%]">
        <Wrapper className="h-full space-y-20 text-center text-white">
          <div className="space-y-5">
            <h1 className="title-page mx-auto max-w-4xl">
              Sign Up for Updates
            </h1>
            <p className="mx-auto max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              numquam asperiores accusamus recusandae facilis. Accusamus
              necessitatibus odio explicabo odit culpa?
            </p>
          </div>
          <form action="">
            <div className="mx-auto flex max-w-sm">
              <input
                type="text"
                className="flex-grow rounded-l-lg border-r-2 border-black p-2 text-black"
              />
              <button className="rounded-r-lg bg-white px-4 py-2 text-black">
                Sign Up
              </button>
            </div>
          </form>
        </Wrapper>
      </div>
    </ImageSection>
  );
};

export default SignUpSection;
