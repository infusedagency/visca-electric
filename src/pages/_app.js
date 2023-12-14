import "@/styles/globals.css";
import Header from "@/components/header";
import { Montserrat, Source_Code_Pro } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${montserrat.style.fontFamily};
        }
        a,
        ul,
        ol,
        p,
        button {
          font-family: ${sourceCodePro.style.fontFamily} !important;
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
