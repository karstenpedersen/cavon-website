import * as FaIcons from "react-icons/fa";

const MoveToTop = () => {
  return (
    <button
      aria-label="Go to top of the page"
      className="white-hover rounded-full p-2 text-xl"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaIcons.FaArrowUp />
    </button>
  );
};

export default MoveToTop;
