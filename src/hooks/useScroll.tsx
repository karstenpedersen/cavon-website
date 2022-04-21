import { useEffect } from "react";

function useScroll(callback: any) {
  let scroll = 0;
  let lastScroll = 0;

  function handleDocumentScroll() {
    lastScroll = scroll;
    scroll = window.scrollY;

    callback({ scroll, lastScroll });
  }

  useEffect(() => {
    window.removeEventListener("scroll", handleDocumentScroll);
    window.addEventListener("scroll", handleDocumentScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleDocumentScroll);
  }, []);
}

export default useScroll;
