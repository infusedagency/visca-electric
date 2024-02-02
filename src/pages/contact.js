import InnerHero from "@/components/innerHero";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ContactUs() {
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
      <InnerHero title="Contact Us" />
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <h3>Location & Contact Info</h3>
                <p>
                  5602 George St., Unit 4
                  <br />
                  Niagara Falls, Ontario
                  <br />
                  L2E 3E2
                </p>
                <br />
                <p>
                  <a href="tel:9053540184">905-354-0184</a>
                  <br />
                  <a href="mailto:info@viscaelectric.ca">info@viscaelectric.ca</a>
                </p>
              </div>
              <div className="lg:w-1/3">
                <h3>Hours</h3>
                <p>
                  <strong>Monday–Thursday:</strong> 7:00am – 4:00pm
                  <br />
                  <strong>Friday:</strong> 7:00am – 3:00pm
                  <br />
                  <strong>Saturday:</strong> Closed
                  <br />
                  <strong>Sunday:</strong> Closed
                </p>
                <p>Office closed at 3:30pm on Friday.</p>
              </div>
              <div className="lg:w-1/3">
                <div className="border-solid border-2 border-red p-6 lg:p-10 mt-6 lg:mb-0">
                  <h2 class="text-[24px] lg:text-[32px]">Request A Service Call</h2>
                  <Link href="/request-service-call">
                    <button className="mt-6">Request Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11650.347726315167!2d-79.087733!3d43.113195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60bccb255272b8ee!2sSam+Visca+Electric!5e0!3m2!1sen!2sca!4v1497470643654"
                  width="100%"
                  height="450"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
