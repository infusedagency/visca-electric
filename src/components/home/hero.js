import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="bg-[url('/img/hero.jpeg')] bg-cover pt-28 pb-16 lg:pt-60 lg:pb-60">
      <div className="container text-center">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0 }}
        >
          <h1>Visca Electric</h1>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <hr className="mx-auto mt-2 w-1/2 opacity-50 border-1 border-white" />
          <h2 className="text-white text-sm lg:text-base pt-2 pb-2 mb-0 lg:pt-6 lg:pb-6">Powered By Quality</h2>
          <hr className="mx-auto w-1/2 opacity-50 border-1 border-white" />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/contact">
            <button className="mt-6">Get A Quote</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
