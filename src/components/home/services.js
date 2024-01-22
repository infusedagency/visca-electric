import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import res from "../../../public/img/residential.jpeg";
import comm from "../../../public/img/commercial.jpeg";
import smart from "../../../public/img/smart-homes.jpeg";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="services bg-grey pt-6 pb-6 lg:pt-56 lg:pb-24 lg:mt-[-200px]">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
          ref={ref}
          animate={mainControls}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0 }}
        >
          <h2>Our Services</h2>
          <hr className="w-20 border-1 border-red mt-2 mb-6 lg:mb-20" />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-24">
          <div className="lg:w-1/3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Image src={res} alt="residential" />
            </motion.div>
          </div>
          <div className="lg:w-2/3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mt-4 md:mt-0">Residential</h3>
              <p>
                Since our establishment in 1991, VISCA Electric has been a trusted partner for homeowners, offering a
                comprehensive range of electrical services.
              </p>
              <Link href="/residential">
                <button className="mt-2 lg:mt-5">View Residential</button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-24 lg:pt-14">
          <div className="lg:w-1/3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image src={comm} className="mt-6 md:mt-0" alt="commercial" />
            </motion.div>
          </div>
          <div className="lg:w-2/3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="mt-4 md:mt-0">Commercial</h3>
              <p>
                VISCA Electric is a leading provider of commercial electrical services, dedicated to powering businesses
                with reliable, efficient, and innovative solutions.
              </p>
              <Link href="/commercial">
                <button className="mt-2 lg:mt-5">View Commercial</button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-24 lg:pt-14">
          <div className="lg:w-1/3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Image src={smart} className="mt-6 md:mt-0" alt="smart homes" />
            </motion.div>
          </div>
          <div className="lg:w-2/3">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h3 className="mt-4 md:mt-0">Smart Homes</h3>
              <p>
                Transform your home into a smart haven with VISCA Electric’s Smart Home Services, where innovation meets
                expertise. Discover the future of living today.
              </p>
              <Link href="/smart-homes">
                <button className="mt-2 lg:mt-5">View Smart Homes</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
