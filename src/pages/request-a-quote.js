import Head from "next/head";
import InnerHero from "@/components/innerHero";
import ContactSidebar from "@/components/contact-sidebar";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function RequestAQuote() {
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
        <title>Request A Quote | VISCA electric</title>
        <meta
          name="description"
          content="Contact VISCA electric today for a free estimate. We're here to serve you."
        ></meta>
      </Head>
      <InnerHero title="Request A Quote" />
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <div className="lg:w-2/3">
                <h2>Contact us for a free estimate</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>Use the form below to request a quote. We are here to serve you.</p>
                <form target="_blank" action="https://formsubmit.co/info@viscaelectric.ca" method="POST">
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          name="name"
                          className="form-control input w-full mt-2 mb-2 rounded-none"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          className="form-control input w-full mt-2 rounded-none"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control input w-full mt-2 rounded-none"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      className="form-control input w-full mt-2 rounded-none"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Description of Work"
                      className="form-control input w-full mt-2 rounded-none pt-2 h-48"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full mt-2 bg-red">
                    Submit Form
                  </button>
                </form>
              </div>
              <div className="lg:w-1/3">
                <ContactSidebar />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
