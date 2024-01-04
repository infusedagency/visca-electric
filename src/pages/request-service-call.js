import InnerHero from "@/components/innerHero";
import ContactSidebar from "@/components/contact-sidebar";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function RequestServiceCall() {
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
                    <select id="priority" name="priority" className="form-control input w-full mt-2 pt-2 rounded-none">
                      <option value="" disabled selected>
                        Select Priority...
                      </option>
                      <option value="low">Low</option>
                      <option value="high">High</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
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
                <div className="border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                  <h2 class="text-[24px] lg:text-[32px]">24-7 Emergency Support</h2>
                  <p>
                    If you need emergency support,
                    <br/>
                    please call <a href="tel:905-354-0184">905-354-0184</a>
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
