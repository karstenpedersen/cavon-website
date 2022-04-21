import type { AppProps } from "next/app";
import "swiper/css/bundle";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
