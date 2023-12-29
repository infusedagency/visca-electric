import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/residential-inner.jpeg";
import newConsImg from "../../public/img/new-construction.jpeg";
import elecImg from "../../public/img/electric-repairs.jpeg";
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
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
              <div className="lg:flex-1">
                <h2>Your Home is in Reliable Hands</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  We understand what your home means to you because we are home owners to. Whether it is a new build,
                  renovation or repair, we get that you want your electrical systems to work and give you peace of mind.
                  Sam Visca Electric has the knowledge, years of experience and personal care to help you with your home
                  systems.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={aboutImg} alt="About" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20 lg:pb-20">
              <div className="lg:flex-1">
                <h2>Renovations & Electrical Repairs</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Call or message us today to have us assess your situation regardless of the state of your renovations
                  or repairs. Sam Visca Electric is here to help and here to make sure the job is done the right way.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={elecImg} alt="electric repairs" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
              <div className="lg:flex-1">
                <h2>New Construction</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  New constructions are not new to us. Our team has the experience and skills to undertake any task
                  during a home’s construction. Give yourself peace of mind knowing Sam Visca Electric installed your
                  home electrical systems.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-6 lg:mb-0" src={newConsImg} alt="new construction" />
              </div>
            </div>
            {/* Cards */}
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 className="text-[24px] lg:text-[32px] font-normal">Design Build</h2>
              </div>
              <div className="flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 className="text-[24px] lg:text-[32px] font-normal">Preventative Maintenance</h2>
              </div>
              <div className="flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 className="text-[24px] lg:text-[32px] font-normal">Emergency Generator Systems</h2>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch items-center">
              <div className="lg:flex lg:items-center lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Fire Alarm, Security Systems & CCTV</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Custom Home Wiring</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Home Network Solutions</h2>
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex lg:items-center lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Service & Panel Upgrades</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Data, TV & Telephone</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 text-center border-solid border-0 border-red p-6 lg:p-10 mb-6 lg:mb-0 sm:hidden md:block">
                <h2 class="text-[24px] lg:text-[32px] font-normal">&nbsp;</h2>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
