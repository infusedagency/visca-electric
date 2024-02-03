import "@/styles/globals.css";
import Script from "next/script";
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
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-111539952-10" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-111539952-10', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        button,
        span,
        input,
        textarea,
        select {
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
