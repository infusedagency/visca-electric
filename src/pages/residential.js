import Head from "next/head";
import Link from "next/link";
import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/residential-inner.jpeg";
import newConsImg from "../../public/img/new-construction.jpeg";
import elecImg from "../../public/img/electric-repairs.jpeg";
import smartImg from "../../public/img/res-smart-homes.jpeg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Residential() {
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
        <title>Residential | VISCA electric</title>
        <meta
          name="description"
          content="With a focus on quality, reliability, and customer service, we strive to enhance the electrical systems of homes to meet the evolving needs of modern living."
        ></meta>
      </Head>
      <InnerHero title="Residential" />
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <div className="lg:flex-1">
                <p>
                  Since our establishment in 1991, VISCA electric has been a trusted licensed electrical contractor for
                  homeowners, offering a comprehensive range of electrical services. With a focus on quality,
                  reliability, and customer service, we strive to enhance the electrical systems of homes to meet the
                  evolving needs of modern living.{" "}
                </p>
              </div>
              <div className="lg:flex-1">
                <p>
                  Our mission is to enhance the safety, efficiency, and comfort of homes through expert residential
                  electrical services. We strive to exceed our clients' expectations by delivering high-quality
                  workmanship and exceptional customer service.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20">
              <div className="lg:flex-1 mt-2 lg:mt-0">
                <h2>Customer-Centric Approach</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Our commitment to customer satisfaction is at the core of our business. We work closely with
                  homeowners, addressing their concerns and tailoring our services to meet their specific needs. We take
                  pride in our responsive nature; we are here and ready to work for you.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={newConsImg} alt="About" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20">
              <div className="lg:flex-1 mt-2 lg:mt-0">
                <h2>Smart Home</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Modernize your home into a smart haven, with VISCA electric’s Smart Home Division where innovation
                  meets expertise. We offer a comprehensive suite of smart home solutions including lighting controls,
                  Wi-Fi/networking, multiroom audio, home theatres, security systems, and more.
                </p>
                <Link href="/smart-homes">
                  <button className="mt-6">Learn More</button>
                </Link>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={smartImg} alt="smart homes" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20 lg:pb-20">
              <div className="lg:flex-1">
                <h2>Decades of Residential Expertise</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  With over 30 years of experience, we understand the unique electrical needs of homeowners and have a
                  proven history of delivering exceptional results. Our team consists of licensed and insured
                  electricians who bring expertise and professionalism to every project, ensuring compliance with safety
                  standards and customer satisfaction.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={elecImg} alt="electric repairs" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
              <div className="lg:flex-1">
                <h2>Residential Lighting Specialists</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  With thousands of homes under our belt, you can trust VISCA electric to give you modern lighting
                  solutions to fit your specific needs. We strive to deliver the latest lighting technologies and trends
                  available.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-6 lg:mb-0" src={aboutImg} alt="new construction" />
              </div>
            </div>
            {/* Cards */}
            {/* Row 1 */}
            {/* <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 className="text-[24px] lg:text-[32px] font-normal">Design Build</h2>
              </div>
              <div className="flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 className="text-[24px] lg:text-[32px] font-normal">Preventative Maintenance</h2>
              </div>
              <div className="flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 className="text-[24px] lg:text-[32px] font-normal">Emergency Generator Systems</h2>
              </div>
            </div> */}
            {/* Row 2 */}
            {/* <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch items-center">
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Fire Alarm, Security Systems & CCTV</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Custom Home Wiring</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Home Network Solutions</h2>
              </div>
            </div> */}
            {/* Row 3 */}
            {/* <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Service & Panel Upgrades</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Data, TV & Telephone</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-0 border-red p-6 lg:p-10 mb-6 lg:mb-0 sm:hidden md:block">
                <h2 class="text-[24px] lg:text-[32px] font-normal">&nbsp;</h2>
              </div>
            </div> */}
          </div>
        </section>
      </motion.div>
    </>
  );
}
