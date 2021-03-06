import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Navigation } from "@ui";

interface ExtendedAppProps extends AppProps {
  Component: AppProps["Component"] & { title: string };
}

function MyApp({ Component, pageProps }: ExtendedAppProps) {
  return (
    <>
      <Header>{Component.title || "Pocket Spendings"}</Header>
      <main className="flex flex-col">
        <Component {...pageProps} />
      </main>
      <Navigation />
    </>
  );
}

export default MyApp;
