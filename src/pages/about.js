import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/about.jpeg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
    <>
      <InnerHero title="About" />
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
                <h2>Powered By Quality</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  With over three decades of industry experience, VISCA electric (formerly Sam Visca Electric) has a
                  deep understanding of electrical systems and a proven track record of delivering high-quality
                  services.
                </p>
                <br />
                <p>
                  Our commitment to excellence and dedication to providing top-tier electrical services has solidified
                  our position as a trusted and preferred choice for residential, commercial, and industrial clients.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0" src={aboutImg} alt="About" />
              </div>
            </div>
            <br />
            <h2>Why Visca Electric?</h2>
            <hr className="w-20 border-1 border-red mt-2 mb-6" />
            <p className="lg:w-3/4">
              Our mission is to provide high quality electrical services while prioritizing safety, quality, and
              customer satisfaction. We are dedicated to staying at the forefront of industry advancements and
              delivering sustainable, reliable solutions for our clients. Our customer-focused approach means that we
              tailor our services to meet the unique needs of each client, ensuring their satisfaction. We offer a wide
              range of electrical services, including electrical for new builds, residential, commercial, industrial,
              renovations, lighting retrofits, fire alarms, 24/7 emergency services, smart homes, Wi-Fi, data networks,
              audio/video, security alarm and monitoring, CCTV surveillance, and much more.
            </p>
            <br />
            <p className="lg:w-3/4">
              Quality is at the core of everything we do. From materials and workmanship to customer service, we are
              dedicated to delivering excellence in every aspect of our business.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
}
