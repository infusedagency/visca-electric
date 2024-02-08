import Head from "next/head";
import InnerHero from "@/components/innerHero";
import ContactSidebar from "@/components/contact-sidebar";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function RequestAQuote() {
  const [state, handleSubmit] = useForm("mjvnyzov");
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
                <form onSubmit={handleSubmit}>
                  <input id="name" type="text" name="name" placeholder="Full Name" required />
                  <input id="email" type="email" name="email" placeholder="Email Address" required />
                  <input id="phone" type="tel" name="phone" placeholder="Phone Number" required />
                  <input id="company" type="text" name="company" placeholder="Company Name" />
                  <textarea id="message" name="message" rows="10" placeholder="Description of Work" required />

                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                  <button className="w-full mt-2 bg-red" type="submit" disabled={state.submitting}>
                    Submit Form
                  </button>
                </form>
                {state.succeeded ? (
                  <h3 className="mt-10">Thank you! We'll be in contact with you as soon as possible.</h3>
                ) : (
                  ""
                )}
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
