import InnerHero from "@/components/innerHero";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Careers() {
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
      <InnerHero title="Careers" />
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
                <h2>We're Hiring!</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Now’s your opportunity to join one of the Niagara Region’s most reputable electrical contracting
                  companies!
                </p>
                <h3 className="mt-5">Licensed Electricians and Apprentices of All Levels</h3>
                <p>
                  Sam Visca Electric is looking for energetic, motivated individuals, with a good work ethic and someone
                  who works well in a team-oriented environment.
                </p>
                <p>
                  Serving the Niagara Region since 1991, Sam Visca Electric provides electrical services to commercial,
                  residential, and industrial sectors.
                </p>
                <p>FULL TIME positions are available immediately with excellent wages and benefits.</p>
                <h3 className="mt-5">Requirements:</h3>
                <ul className="ml-5 text-white opacity-30">
                  <li>Must be able to read and interpret electrical drawings</li>
                  <li>Skilled at troubleshooting</li>
                  <li>Hold all required safety certificates</li>
                  <li>Valid driver's license</li>
                  <li>Must be dedicated, dependable; we pride ourselves on a high standard of quality</li>
                  <li>A desire for continuous improvement</li>
                  <li>Willing to travel if necessary</li>
                </ul>
                <p className="mt-5">
                  Please fax or email resume to: <strong>905-354-6051</strong> or{" "}
                  <a href="mailto:samviscaelectric@hotmail.com">samviscaelectric@hotmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
