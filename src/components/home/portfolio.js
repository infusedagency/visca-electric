import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import port1 from "../../../public/img/port-1.jpeg";
import port2 from "../../../public/img/port-2.jpeg";

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
    <div className="container text-center pt-10 pb-10 lg:pt-24 lg:pb-24">
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        <h2>Our Portfolio</h2>
        <hr className="mx-auto w-20 border-1 border-red mt-2" />
      </motion.div>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        ref={ref}
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        <p className="lg:w-2/3 mx-auto mt-8 mb-8">
          With over three decades of industry experience, VISCA electric (formerly Sam Visca Electric) has a deep
          understanding of electrical systems and a proven track record of delivering high-quality services.  
        </p>
      </motion.div>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        ref={ref}
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        <Link href="/portfolio">
          <button>View Portfolio</button>
        </Link>
      </motion.div>
      {/* Images */}
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-16 gap-3 lg:gap-10">
        <div className="lg:flex-1">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            ref={ref}
            animate={mainControls}
            transition={{ duration: 0.5 }}
          >
            <Image className="w-full" src={port1} alt="image 1" />
          </motion.div>
        </div>
        <div className="lg:flex-1">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            ref={ref}
            animate={mainControls}
            transition={{ duration: 0.5 }}
          >
            <Image className="w-full" src={port2} alt="image 2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
