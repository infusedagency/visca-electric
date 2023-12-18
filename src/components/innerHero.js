import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function InnerHero({ title }) {
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
      <section className="inner-hero text-center pt-24 pb-5 lg:pt-52 lg:pb-20 bg-grey">
        <div className="container">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            ref={ref}
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0 }}
          >
            <h1 className="text-base">{title}</h1>
            <hr className="mx-auto w-20 border-1 border-red mt-2 mb-6 lg:mb-20" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
