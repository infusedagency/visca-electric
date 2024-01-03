import InnerHero from "@/components/innerHero";
import Image from "next/image";
import portComm1 from "../../public/img/port-comm-1.jpeg";
import portComm2 from "../../public/img/port-comm-2.jpeg";
import portComm3 from "../../public/img/port-comm-3.jpeg";
import portRes1 from "../../public/img/port-res-1.jpeg";
import portRes2 from "../../public/img/port-res-2.jpeg";
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
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Commercial & Institutions</h2>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <Image src={portComm1} className="mb-5" alt="FACS Niagara" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">FACS Niagara</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <Image src={portComm2} className="mb-5" alt="Niagara Falls Fire Station #6" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">Niagara Falls Fire Station #6</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-0">
                <Image src={portComm3} className="mb-5" alt="Niagara-on-the-Lake Community Centre" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">Niagara-on-the-Lake Community Centre</h2>
              </div>
            </div>
            {/* Residential */}
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mt-2 lg:mt-10 mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Residential</h2>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <Image src={portRes1} className="mb-5" alt="Apartment Buildings" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">Apartment Buildings</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 lg:mb-0">
                <Image src={portRes2} className="mb-5" alt="Retirement Home" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">Retirement Home</h2>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1 border-solid border-0 border-red p-6 lg:p-10 mb-6 lg:mb-0 hidden md:block lg:block">
                <h2 class="text-[24px] lg:text-[32px] font-normal">&nbsp;</h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mt-2 lg:mt-10 mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Home &amp; Automation</h2>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <Image src={portHome1} className="mb-5" alt="Automatic Shades" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">Automatic Shades</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <Image src={portHome2} className="mb-5" alt="IP Cameras" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">IP Cameras</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-0">
                <Image src={portHome3} className="mb-5" alt="Lighting Controls" />
                <h2 class="text-[24px] lg:text-[32px] font-normal">Lighting Controls</h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center mt-2 lg:mt-10 mb-2 lg:mb-0">
              <div className="lg:flex-1">
                <h2>Condo Buildings</h2>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Condo Building Uno</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">NXT I</h2>
              </div>
              <div className="lg:items-center lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">NXT II</h2>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
