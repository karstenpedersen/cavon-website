import Wrapper from "components/containers/layouts/Wrapper";
import ImageSection from "components/containers/pagesections/ImageSection";
import { default as heroImage } from "../../../public/images/hero.png";
const SignUpSection = () => {
  return (
    <ImageSection
      image={heroImage}
      className="bg-black bg-opacity-70"
      height="h-[500px]"
      sectionId="sign-up"
    >
      <div className="absolute top-[50%] w-full translate-y-[-50%]">
        <Wrapper className="h-full space-y-20 text-center text-white">
          <div className="space-y-5">
            <h1 className="title-page mx-auto max-w-4xl">
              Sign Up for Updates
            </h1>
            <p className="mx-auto max-w-md">
              Sign up now to get all the latest news about the game and features
              that will be implemented. With your feedback, we can continue to
              enhance the experience for the future of the game and its player
              base.
            </p>
          </div>
          <form action="">
            <div className="mx-auto flex max-w-sm">
              <label htmlFor="email"></label>
              <input
                id="email"
                type="text"
                className="flex-grow rounded-l-lg border-r-2 border-primary p-2 text-black"
              />
              <button
                aria-label="Sign up for news and updates"
                className="min-w-max rounded-r-lg bg-white px-4 py-2 text-black"
              >
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
