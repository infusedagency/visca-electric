import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import offer from "../../../public/img/offer.jpeg";

export default function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="container pt-8 pb-8 lg:pt-24 lg:pb-24">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="lg:flex-1">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            ref={ref}
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-10">
              <h2 class="text-[24px] lg:text-[32px] font-normal">Limited Time Offer</h2>
            </div>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            ref={ref}
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>Panel Upgrade Special</h2>
            <hr className="w-20 border-1 border-red mt-2 mb-6 lg:mb-10" />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            ref={ref}
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              <span className="text-2xl !text-white !opacity-100">100A fuse to breaker upgrade $1,050.00 + HST.</span>
              <br />
              <br />
              VISCA electric is your trusted electrical contractor for this essential upgrade. Our experienced
              electricians will assess your needs and install your new breaker panel with quality and care. We will
              deliver our services on time and as quoted. You can rely on us to communicate the panel upgrade process
              every step of the way.  
            </p>
          </motion.div>
        </div>
        <div className="lg:flex-1">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            ref={ref}
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Image className="w-full mt-5 lg:mt-0" src={offer} alt="offer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
