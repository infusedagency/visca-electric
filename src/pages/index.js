import Head from "next/head";
import Hero from "@/components/home/hero";
import Offer from "@/components/home/offer";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";

const schema = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "Sam Visca Electric",
  url: "https://viscaelectric.ca",
  logo: "https://viscaelectric.ca/wp-content/uploads/sites/11/2017/06/logo-1.0-640x251.png",
  image: "https://viscaelectric.ca/wp-content/uploads/sites/11/2017/06/logo-1.0-640x251.png",
  description: "",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "5602 George Street",
      addressLocality: "Niagara Falls ",
      addressRegion: "ON",
      addressCountry: "Canada",
      postalCode: "L2E3E2",
    },
  ],
  hasMap: "https://maps.google.com/?q=",
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: "",
      longitude: "",
    },
  ],
  openingHours: "Mo 07:00-16:00,Tu 07:00-16:00,We 07:00-16:00,Th 07:00-16:00,Fr 07:00-16:00",
  sameAs: [],
  email: "info@viscaelectric.ca",
  telephone: "905-354-0184",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Niagara Region Electrical Contractor | VISCA electric </title>
        <meta
          name="description"
          content="Serving the Niagara Region since 1991, Sam Visca Electric provides electrical services to residential, commercial and industrial sectors."
        ></meta>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Hero />
      <Portfolio />
      <Services />
      <Offer />
      <Testimonials />
    </>
  );
}
