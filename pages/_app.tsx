import type { AppProps } from "next/app";

import { HabitsProvider } from "../providers/HabitsProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HabitsProvider>
      <Component {...pageProps} />
    </HabitsProvider>
  );
}

export default MyApp;
