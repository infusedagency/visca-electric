import Head from "next/head";
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
      <Head>
        <title>Careers | VISCA electric</title>
        <meta
          name="description"
          content="Join the VISCA electric team and turn your passion for electrical work into a rewarding career! We're actively seeking talented individuals who share our commitment to growth, innovation, and collaboration."
        ></meta>
      </Head>
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
                <h2>Join Our Team at VISCA electric</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  Are you passionate about electrical work and looking for a rewarding career? At VISCA electric we are
                  always on the lookout for talented individuals to join our dynamic team. We believe in investing in
                  our people and creating a workplace that values growth, innovation, and collaboration. Join us and be
                  a part of a team that's powering the future.
                </p>
                <h3 className="mt-5">Why VISCA electric?</h3>
                <ul className="ml-5 text-white opacity-30">
                  <li>
                    <strong>Legacy of Excellence:</strong> Established in 1991, VISCA electric has developed a
                    reputation for delivering high-quality electrical services. Join a team with a proven track record
                    of success.
                  </li>
                  <li>
                    <strong>Diverse Projects:</strong> From residential homes to multi-storey low and high-rise
                    buildings, our diverse portfolio ensures that every day is a new and exciting challenge.
                  </li>
                  <li>
                    <strong>Collaborative Culture:</strong> Enjoy a collaborative work environment where your ideas are
                    valued, and teamwork is essential for success.
                  </li>
                </ul>
                <h3 className="mt-5">Current Openings</h3>
                <p>
                  <strong>FULL TIME</strong> positions are available immediately with excellent wages and benefits.
                </p>
                <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
                  <div className="lg:flex-1 mt-2 lg:mt-0">
                    <h3 className="mt-5">ELECTRICIANS – FULL TIME</h3>
                    <p>
                      <strong>Requirements:</strong>
                    </p>
                    <ul className="ml-5 text-white opacity-30">
                      <li>309A Construction and Maintenance Electrician license</li>
                      <li>Hold all required safety certificates</li>
                      <li>Valid driver's license</li>
                      <li>Must be dedicated and dependable</li>
                      <li>Have a desire for learning new skills and concepts</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving skills and attention to detail</li>
                      <li>Proven experience as an electrician in residential, commercial, or industrial settings</li>
                    </ul>
                    <p>
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="ml-5 text-white opacity-30">
                      <li>
                        Install, maintain, and repair electrical systems in accordance with the latest version of the
                        Ontario Electrical Safety Code
                      </li>
                      <li>Troubleshoot and diagnose electrical issues</li>
                      <li>Read, interpret, and understand electrical drawings</li>
                      <li>Work both independently and as part of a team</li>
                      <li>Always adhere to safety protocols and regulations</li>
                    </ul>
                  </div>
                  <div className="lg:flex-1">
                    <h3 className="mt-5">FIRE ALARM TECHNICIAN – FULL TIME</h3>
                    <p>
                      <strong>Requirements:</strong>
                    </p>
                    <ul className="ml-5 text-white opacity-30">
                      <li>2-year minimum experience</li>
                      <li>Hold all required safety certificates</li>
                      <li>Valid driver's license</li>
                      <li>CFAA license (required)</li>
                      <li>Must be dedicated and dependable</li>
                      <li>Must be able to read and interpret electrical and fire alarm drawings</li>
                      <li>Skilled at troubleshooting</li>
                      <li>Strong problem-solving skills</li>
                    </ul>
                    <p>
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="ml-5 text-white opacity-30">
                      <li>Install and replace fire alarm panels, fire alarm devices, conduit, wire/cables</li>
                      <li>Read and interpret fire alarm drawings and install accordingly</li>
                      <li>Troubleshoot ground faults, troubles, and alarms</li>
                      <li>Work both independently and as part of a team</li>
                      <li>Adhere to safety protocols and regulations at all times</li>
                    </ul>
                  </div>
                </div>
                <h3 className="mt-5">APPLY NOW</h3>
                <p>
                  If you're ready to take the next step in your career and become part of the VISCA electric family,
                  please email us your resume and cover letter to{" "}
                  <a href="mailto:info@viscaelectric.ca">info@viscaelectric.ca</a>. Be sure to specify the position you
                  are applying for in the subject line.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
