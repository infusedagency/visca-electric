import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/comm-inner.jpeg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Commercial() {
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
      <InnerHero title="Commercial" />
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
              <div className="lg:w-7/12">
                <h2>Experienced Full Service Contractor</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Sam Visca Electric offers specialized services and products for commercial electrical projects. No
                  commercial project is too big or too small for us. We can handle any task at any point of a project or
                  fix any problem you have been experiencing.
                  <br />
                  <br />
                  Rest assured our team approaches every project with the same care and technical expertise to make sure
                  everything is up to industry standards. Our knowledge is up to date and field experienced ready for
                  any situation.
                </p>
              </div>
              <div className="lg:w-4/12">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={aboutImg} alt="Commercial" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-20 lg:pb-20">
              <div className="lg:w-7/12">
                <h2>We have the experience with sophisticated systems that you need.</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  With over 20 years of experience our team has the knowledge and skills for any commercial project.
                  Check out some of our previous work for community centres, schools and more.
                </p>
              </div>
              <div className="lg:w-4/12 border-solid border-2 border-red p-6">
                <h2>What We Do:</h2>
                <ul className="ml-5 text-white opacity-30">
                  <li>Free Standing Commercial Buildings</li>
                  <li>High Rise</li>
                  <li>Schools/Learning Centres</li>
                  <li>Shopping Centres</li>
                  <li>Restaurants</li>
                </ul>
              </div>
            </div>
            {/* Cards */}
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-20 justify-items-stretch">
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Design Build</h2>
              </div>
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Preventative Maintenance</h2>
              </div>
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Commercial Lighting</h2>
              </div>
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Emergency Generator Systems</h2>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Fire Alarm, Security Systems & CCTV</h2>
              </div>
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Card Access</h2>
              </div>
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Power Distribution</h2>
              </div>
              <div className="lg:flex-1 text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Data, TV & Telephone</h2>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
