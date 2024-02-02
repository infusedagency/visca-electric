import InnerHero from "@/components/innerHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Testimonials() {
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
      <InnerHero title="Testimonials" />
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            {/* Row 1 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pt-4 lg:pt-10">
                <div className="flex-1 bg-white p-10">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Jim Halucha</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      I've been working with VISCA Electric for almost 20 years and have used them both personally and
                      professionally. They are knowledgeable, professional and very well organized. They've done small
                      electrical maintenance items at our office to full scale electrical installations on townhouse
                      developments for us. From big jobs to small, they really can do it all!
                    </em>
                  </p>
                </div>
                <div className="flex-1 bg-white p-10">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Linda Gross</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      We recently had several jobs done by Visca Electric and were absolutely delighted with the service
                      we received. We were lucky enough to have Oscar perform all the services including a new breaker
                      panel, installation of new light fixtures and copper pigtailing of our aluminum wiring. He was on
                      time and a pleasure to have in our home. His friendly attitude and excellent work ethic was very
                      much appreciated. We would definitely call on them again for our electrical needs. Thanks again
                      Oscar!
                    </em>
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Row 2 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row pt-6 lg:pt-10 lg:gap-10">
                <div className="flex-1 bg-white p-10">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Savan Chandria</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      Used them for all the electrical on 7 storey apartment building. Work was extremely neat, they
                      always cleaned up after themselves, and workmanship was very good. Kept ahead of other trades and
                      didn't have to be chased. Probably the best trade we had on that job -- would definitely work with
                      them again!
                    </em>
                  </p>
                </div>
                <div className="flex-1 bg-white p-10 mt-6 md:mt-0">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Kimbel Donayre</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      We hired VISCA electric to install a home security system in our home and they did an amazing job.
                      Sandro and his team were professional, polite and clean. Every time I set the alarm, I am
                      impressed by the installation and quality. I would recommend them to anyone!
                    </em>
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Row 3 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row pt-6 lg:pt-10 lg:gap-10">
                <div className="flex-1 bg-white p-10">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">David Dangelo</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      I have used VISCA electric for many electrical jobs over the years both residential and
                      commercial. Through all of these jobs, I have only ever had a great experience with VISCA
                      electric. The electricians are always professional, reliable and get the job done. The office
                      staff is also always friendly and very knowledgable. Thank you for all the hardwork and look
                      forward to seeing the team on the next job. Highly recommended!
                    </em>
                  </p>
                </div>
                <div className="flex-1 bg-white p-10 mt-6 md:mt-0">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Blythwood Homes</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      VISCA electric has been an invaluable partner to Blythwood Homes for over 20 years, and their
                      service continues to exceed expectations. The crews at VISCA electric are not only skilled but
                      also personable, making collaboration a pleasure. Their unwavering commitment to quality and
                      attention to detail shine through in every project, showcasing unmatched craftsmanship. I highly
                      recommend VISCA electric for their reliability, professionalism, and the consistently exceptional
                      results they deliver. A solid 5-star rating for a two-decade legacy of excellence!
                    </em>
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Row 4 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
              ref={ref}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row pt-6 lg:pt-10 lg:gap-10">
                <div className="flex-1 bg-white p-10">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Stu McLean</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      Had a good experience with this company upgrading my fuse box to a new breaker panel with a surge
                      protector. Price was very fair, and the work was done on-schedule and with zero problems. Oscar,
                      the electrician, did a good job and was a real nice guy who answered all my questions.
                    </em>
                  </p>
                </div>
                <div className="flex-1 bg-white p-10 mt-6 md:mt-0">
                  <div className="flex justify-between">
                    <p className="text-dark-grey opacity-100">Dawn Rozell</p>
                    <div className="flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="text-grey opacity-50">
                    <em>
                      Chris and George from Sam VISCA electric did a fantastic job at upgrading my electrical panel and
                      installing a recepticle outside. I highly recommend Sam VISCA electric for all your electrical
                      needs. Great job, thank you!
                    </em>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
