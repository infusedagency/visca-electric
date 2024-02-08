import Head from "next/head";
import InnerHero from "@/components/innerHero";
import ContactSidebar from "@/components/contact-sidebar";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function RequestServiceCall() {
  const [state, handleSubmit] = useForm("xzbnewav");
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
          content="Contact VISCA electric today to request a service call. We're here to serve you."
        ></meta>
      </Head>
      <InnerHero title="Request A Service Call" />
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
                <h2>Service</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>Use the form below to request a service call.</p>
                <form onSubmit={handleSubmit}>
                  <input id="name" type="text" name="name" placeholder="Full Name" required />
                  <input id="email" type="email" name="email" placeholder="Email Address" required />
                  <input id="phone" type="tel" name="phone" placeholder="Phone Number" required />
                  <input id="company" type="text" name="company" placeholder="Company Name" />
                  <select
                    id="hear"
                    name="how-did-you-hear-about-us"
                    className="form-control input w-full mt-2 pt-2 rounded-none"
                  >
                    <option value="" disabled="">
                      How did you hear about us?
                    </option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                    <option value="past-customer-referral">Past Customer Referral</option>
                    <option value="company-van">Company Van</option>
                    <option value="esa">ESA</option>
                    <option value="101.1-more-fm">101.1 More FM</option>
                    <option value="other">Other</option>
                  </select>
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
                <div className="border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0 mt-2 lg:mt-0">
                  <h2 class="text-[24px] lg:text-[32px]">24-7 Emergency Services and Repairs</h2>
                  <p>
                    If you need emergency support,
                    <br />
                    please call <a href="tel:905-354-0184">905-354-0184</a>
                  </p>
                  <br />
                  <br />
                  <p>
                    Electrical emergencies never wait, neither do we. No matter when, we will be there to serve you.
                    Electrical issues can strike at any time, day, or night. When you're in the dark or facing a
                    potentially dangerous electrical problem, you need a reliable electrician that you can count on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
