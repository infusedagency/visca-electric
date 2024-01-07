import InnerHero from "@/components/innerHero";
import Image from "next/image";
import offer from "../../public/img/offer.jpeg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function About() {
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
      <InnerHero title="Panel Upgrade Special" />
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
                <h2>Upgrade your electrical panel with VISCA electric</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  We specialize in replacing old and problematic fuse panels with modern, safer, and more convenient
                  breaker panels.
                  <br />
                  <br />
                  VISCA electric is your trusted electrical contractor for this essential upgrade. Our experienced
                  electricians will assess your needs and install your new breaker panel with quality and care. We will
                  deliver our services on time and as quoted. You can rely on us to communicate the panel upgrade
                  process every step of the way.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0" src={offer} alt="Offer" />
              </div>
            </div>
            <br />
            <h2 className="lg:pt-10">Why Replace Fuse Panels with Breaker Panels?</h2>
            <hr className="w-20 border-1 border-red mt-2 mb-6" />
            {/* Cards */}
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Enhanced Safety</h2>
                <p>
                  Eliminate the risk of improper fuse installation. Breakers are designed to trip when they detect an
                  overload or short circuit, reducing the risk of electrical fires.
                </p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Improved Convienence</h2>
                <p>No more fumbling for replacement fuses. Breakers can simply reset with the flick of a switch.</p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Increased Electrical Capacity</h2>
                <p>Modern breaker panels can add space for additional circuits.</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Compatibility</h2>
                <p>Fuse panels are obsolete, making it harder to find replacement parts.</p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Code Compliance</h2>
                <p>
                  Many insurance companies and home inspectors often recommend a fuse to breaker panel replacement at
                  time of sale and/or obtaining home insurance.
                </p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Peace of Mind</h2>
                <p>
                  With a new breaker panel, you will have a reliable electrical system that is safer and more
                  convenient.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 mt-2 lg:mt-5 justify-items-stretch">
              <div className="lg:flex-1">
                <h2>Our Services Include:</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Electrical emergencies never wait, neither do we. No matter when, we will be there to serve you.
                  Electrical issues can strike at any time, day, or night. When you're in the dark or facing a
                  potentially dangerous electrical problem, you need a reliable electrician that you can count on.
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Panel Assessment</h2>
                <p>
                  We will evaluate your current system and recommend the right replacement that fits your budget. If
                  required, we will recommend a service upgrade to meet the increased demand that you may need. Whether
                  you are planning to install an EV charger, hot tub, or other new electrical device, we will make sure
                  you are covered.{" "}
                </p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Permitting and Compliance</h2>
                <p>We will ensure your installation meets local codes and regulations.</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
