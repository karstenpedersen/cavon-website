import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";

const MediaSection = () => {
  return (
    <Section sectionId="media" className="bg-surface py-10 text-on-surface">
      <Wrapper className="text-center ">
        <h1 className="title-1">CAVON MEDIA</h1>
        <div className="">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/j2mjr2lNcAk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Wrapper>
    </Section>
  );
};

export default MediaSection;
