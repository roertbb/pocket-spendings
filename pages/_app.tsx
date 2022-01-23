import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navigation } from "@ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <main className="flex flex-col">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
