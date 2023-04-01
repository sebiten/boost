import { BoostProvider } from "@/context/boostProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BoostProvider>
      <Component {...pageProps} />
    </BoostProvider>
  );
}
