import Head from "next/head";
import InnerHero from "@/components/innerHero";
import Image from "next/image";
import portComm1 from "../../public/img/port-comm-1.jpeg";
import portComm2 from "../../public/img/port-comm-2.jpeg";
import portComm3 from "../../public/img/port-comm-3.jpeg";
import portComm4 from "../../public/img/port-comm-4.jpeg";
import portComm5 from "../../public/img/port-comm-5.jpeg";
import portComm6 from "../../public/img/port-comm-6.jpeg";
import portComm7 from "../../public/img/port-comm-7.jpeg";
import portRes1 from "../../public/img/port-res-1.jpeg";
import portRes2 from "../../public/img/port-res-2.jpeg";
import portRes3 from "../../public/img/port-res-3.jpeg";
import portRes4 from "../../public/img/port-res-4.jpeg";
import portRes5 from "../../public/img/port-res-5.jpeg";
import portRes6 from "../../public/img/port-res-6.jpeg";
import portRes7 from "../../public/img/port-res-7.jpeg";
import portMultiRes1 from "../../public/img/port-multires-1.jpeg";
import portMultiRes2 from "../../public/img/port-multires-2.jpeg";
import portMultiRes3 from "../../public/img/port-multires-3.jpeg";
import portMultiRes4 from "../../public/img/port-multires-4.jpeg";
import portMultiRes5 from "../../public/img/port-multires-5.jpeg";
import portMultiRes6 from "../../public/img/port-multires-6.jpeg";
import portHome1 from "../../public/img/port-home-1.jpeg";
import portHome2 from "../../public/img/port-home-2.jpeg";
import portHome3 from "../../public/img/port-home-3.jpeg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Portfolio() {
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
        <title>Portfolio | VISCA electric </title>
        <meta
          name="description"
          content="Check out the VISCA electric commercial, residential and multi-residential portfolio projects."
        ></meta>
      </Head>
      <InnerHero title="Portfolio" />
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            <p className="mb-2">
              For our most recent work, please <a href="https://www.instagram.com/viscaelectric/">click here</a> to view
              our Instagram.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Commercial & Institutions</h2>
              </div>
            </div>
            {/* Commercial */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm1} className="mb-5" alt="portfolio commercial 1" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm2} className="mb-5" alt="portfolio commercial 2" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm3} className="mb-5" alt="portfolio commercial 3" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm4} className="mb-5" alt="portfolio commercial 4" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm5} className="mb-5" alt="portfolio commercial 5" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm6} className="mb-5" alt="portfolio commercial 6" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portComm7} className="mb-5" alt="portfolio commercial 7" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0 hidden lg:block">&nbsp;</div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0 hidden lg:block">&nbsp;</div>
            </div>
            {/* Residential */}
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mt-2 lg:mt-5 mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Residential</h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes1} className="mb-5" alt="portfolio residential 1" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes2} className="mb-5" alt="portfolio residential 2" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes3} className="mb-5" alt="portfolio residential 3" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes4} className="mb-5" alt="portfolio residential 4" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes5} className="mb-5" alt="portfolio residential 5" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes6} className="mb-5" alt="portfolio residential 6" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portRes7} className="mb-5" alt="portfolio residential 7" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0 hidden lg:block">&nbsp;</div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0 hidden lg:block">&nbsp;</div>
            </div>
            {/* Multi Residential */}
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mt-2 lg:mt-5 mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Multi-Residential</h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portMultiRes1} className="mb-5" alt="portfolio multi residential 1" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portMultiRes2} className="mb-5" alt="portfolio multi residential 2" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portMultiRes3} className="mb-5" alt="portfolio multi residential 3" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portMultiRes4} className="mb-5" alt="portfolio multi residential 4" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portMultiRes5} className="mb-5" alt="portfolio multi residential 5" />
              </div>
              <div className="lg:items-center lg:flex-1 mb-6 lg:mb-0">
                <Image src={portMultiRes6} className="mb-5" alt="portfolio multi residential 6" />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
