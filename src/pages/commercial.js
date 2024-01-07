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
              <div className="lg:flex-1">
                <p>
                  VISCA electric is a leading provider of commercial electrical services, dedicated to powering
                  businesses with reliable, efficient, and innovative solutions.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={aboutImg} alt="Commercial" />
              </div>
            </div>
            {/* Cards */}
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-20 justify-items-stretch">
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Licensed Professionals</h2>
                <p>
                  Our seasoned team of licensed electricians, apprentices, and project managers are well-versed in the
                  latest industry standards, providing peace of mind for our commercial clients.
                </p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Safety and Compliance</h2>
                <p>
                  Prioritizing safety and compliance, we ensure that all our commercial projects adhere to local
                  regulations and industry safety standards.
                </p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Electrical Services for Varied Industries</h2>
                <p>
                  Whether it's retail, healthcare, hospitality, industrial or manufacturing, we provide electrical
                  services tailored to the specific needs of diverse commercial sectors.
                </p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Fire Alarm Services</h2>
                <p>
                  Our team is trained and equipped to install, service, and retrofit fire alarm systems to meet the
                  latest rules and regulations in all buildings.
                </p>
              </div>
              <div className="lg:flex-1 border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Timely Project Completion</h2>
                <p>
                  We understand the importance of timelines in commercial projects. Our team is dedicated to completing
                  projects on schedule, minimizing downtime for businesses.
                </p>
              </div>
              <div className="lg:flex-1 p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0 hidden lg:block">
                <h2 class="text-[24px] lg:text-[32px] font-normal">&nbsp;</h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 mt-2 lg:mt-5 justify-items-stretch">
              <div className="lg:flex-1">
                <h2>24/7 Emergency Services and Repairs</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Electrical emergencies never wait, neither do we. No matter when, we will be there to serve you.
                  Electrical issues can strike at any time, day, or night. When you're in the dark or facing a
                  potentially dangerous electrical problem, you need a reliable electrician that you can count on.
                </p>
              </div>
              <div className="lg:flex-1 mt-5 lg:mt-0">
                <h3>Why Choose Our 24/7 Emergency Service:</h3>
                <ul>
                  <li>
                    <strong>Rapid Response:</strong> We understand the urgency of electrical problems and will do our
                    best to keep your home or business running smoothly. We will typically be able to get on site within
                    1 to 3 hours for emergencies within the Niagara Region.
                  </li>
                  <li>
                    <strong>Round-the-Clock Availability:</strong> We're here 24/7, 365 days a year, to respond to your
                    electrical emergencies promptly.
                  </li>
                  <li>
                    <strong>Experienced Emergency Team:</strong> Our skilled electricians are trained to handle a wide
                    range of electrical issues. You can rely on us to keep your home or business up and running.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
