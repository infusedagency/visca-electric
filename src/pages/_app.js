import "@/styles/globals.css";
import Header from "@/components/header";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/footer";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const sourceCodePro = Source_Sans_3({
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
        h6,
        button,
        span {
          font-family: ${montserrat.style.fontFamily};
        }
        a,
        ul,
        ol,
        p {
          font-family: ${sourceCodePro.style.fontFamily} !important;
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
