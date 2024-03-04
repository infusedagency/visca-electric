import Head from "next/head";
import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/infused-agency.png";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <Head>
        <title>Infused Agency | VISCA electric </title>
        <meta
          name="description"
          content="VISCA electric's website is built by Infused Agency. A top web design and web development firm. Click here to learn more!"
        ></meta>
      </Head>
      <InnerHero title="Infused Agency" />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
              <div className="lg:flex-1">
                <h2>
                  Website Design, Development &amp; Search Engine Optimization
                </h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="mb-6">
                  Since our establishment in 2013, we have had the privilege of
                  assisting numerous businesses in St. Catharines, Niagara, and
                  beyond, spanning from small local enterprises to large-scale
                  corporations. Our expertise extends across various domains,
                  including website design, digital marketing, search engine
                  optimization (SEO), WordPress development, and e-commerce
                  website creation.
                </p>
                <p className="mb-6">
                  Over the years, we have played a pivotal role in enhancing the
                  online presence of our clients, facilitating the growth of
                  their businesses through strategic digital solutions. Whether
                  it's optimizing their websites for search engines, crafting
                  visually appealing and user-friendly WordPress sites, or
                  implementing effective e-commerce platforms, our team has
                  consistently delivered results.
                </p>
                <p className="mb-6">
                  Our commitment to supporting local businesses has translated
                  into a diverse portfolio of success stories, where we've not
                  only increased website traffic but also built modern,
                  responsive websites that align with contemporary design
                  trends. From modest enterprises to expansive corporate
                  entities, our tailored solutions have contributed to a
                  significant boost in revenue by leveraging the power of
                  digital channels.
                </p>
                <p className="mb-6">
                  In essence, our journey since 2013 has been defined by a
                  passion for empowering businesses through comprehensive
                  digital strategies, transforming their online landscapes, and
                  ultimately driving success in the competitive digital realm.
                </p>
                <p>
                  <a href="https://infused.agency" target="_blank">
                    Niagara web design
                  </a>{" "}
                  website by Infused Agency
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0" src={aboutImg} alt="About" />
              </div>
            </div>
            <br />
            <h2>Why Infused Agency?</h2>
            <hr className="w-20 border-1 border-red mt-2 mb-6" />

            <h3>Proven Track Record</h3>
            <p>
              Why invest in a web design company that doesn't enhance your
              business? Opt for Infused Agency, and we'll set your company
              apart. Our adept web design agency excels at creating websites and
              employing effective strategies to foster your business growth.
              With a track record dating back to 2013, we've successfully
              propelled numerous businesses to success. Rest assured, we have
              the expertise to make a positive impact.
            </p>
            <h3>Web Design Experts</h3>
            <p>
              While there are numerous web designers catering to businesses, our
              approach sets us apart. We take special care in crafting our
              websites, avoiding ready-made templates. Instead, we meticulously
              handcraft each site to ensure they are secure, exceptionally fast,
              and boast a distinctive appearance. Employing the latest
              techniques, our websites stand out as top-notch in quality.
            </p>

            <h3>Prompt Delivery</h3>
            <p>
              Understanding the demands of your business, we prioritize building
              your website swiftly and effectively. From our initial discussions
              to presenting the design and finally launching the website, we
              maintain constant communication to ensure everything aligns
              perfectly. We address your queries promptly, guaranteeing that
              your website is ready precisely when you need it. Timely delivery
              is our commitment!
            </p>
            <br />
            <h2>Schedule A Free Consulation</h2>
            <hr className="w-20 border-1 border-red mt-2 mb-6" />
            <p>
              Click the link below to schedule your free consultation in order
              to get a free website or SEO quote:
            </p>
            <a
              href="https://calendly.com/infused-agency/project-discovery/"
              target="_blank"
            >
              <button className="mt-6">Free Consulation</button>
            </a>
          </div>
        </section>
      </motion.div>
    </>
  );
}
