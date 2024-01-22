import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/comm-inner.jpeg";
import commLic from "../../public/img/comm-licensed.jpeg";
import commSafe from "../../public/img/comm-safety.jpeg";
import commElec from "../../public/img/comm-electrical.jpeg";
import commFire from "../../public/img/comm-fire.jpeg";
import commTime from "../../public/img/comm-proj.jpeg";
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
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20 lg:pb-20">
              <div className="lg:flex-1">
                <h2>Licensed Professionals</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Our seasoned team of licensed electricians, apprentices, and project managers are well-versed in the
                  latest industry standards, providing peace of mind for our commercial clients.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={commLic} alt="safety compliance" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Safety and Compliance</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Prioritizing safety and compliance, we ensure that all our commercial projects adhere to local
                  regulations and industry safety standards.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={commSafe} alt="licensed pros" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Electrical Services for Varied Industries</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Whether it's retail, healthcare, hospitality, industrial or manufacturing, we provide electrical
                  services tailored to the specific needs of diverse commercial sectors.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={commElec} alt="electrical" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Fire Alarm Services</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Our team is trained and equipped to install, service, and retrofit fire alarm systems to meet the
                  latest rules and regulations in all buildings.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={commFire} alt="fire alarm" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Timely Project Completion</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  We understand the importance of timelines in commercial projects. Our team is dedicated to completing
                  projects on schedule, minimizing downtime for businesses.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={commTime} alt="timely completion" />
              </div>
            </div>
            {/* emergency services */}
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
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
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
