import Head from "next/head";
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
      <Head>
        <title>Commercial | VISCA electric</title>
        <meta
          name="description"
          content="VISCA electric is a leading provider of commercial electrical services, dedicated to powering businesses with reliable, efficient, and innovative solutions."
        ></meta>
      </Head>
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
          </div>
        </section>
      </motion.div>
    </>
  );
}
