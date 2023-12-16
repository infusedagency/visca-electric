import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <section className="testimonials pt-8 pb-8 lg:pt-24 lg:pb-24 bg-grey">
      <div className="container">
        <h2 className="mb-4 text-center">Our Happy Clients</h2>
        <hr className="w-20 mx-auto border-1 border-red mt-2 lg:mb-10" />
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pt-10">
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
                “I've been working with Visca Electric for almost 20 years and have used them both personally and
                professionally. They are knowledgeable, professional and very well organized. They've done small
                electrical maintenance items at our office to full scale electrical installations on townhouse
                developments for us. From big jobs to small, they really can do it all!”
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
                We recently had several jobs done by Visca Electric and were absolutely delighted with the service we
                received. We were lucky enough to have Oscar perform all the services including a new breaker panel,
                installation of new light fixtures and copper pigtailing of our aluminum wiring. He was on time and a
                pleasure to have in our home. His friendly attitude and excellent work ethic was very much appreciated.
                We would definitely call on them again for our electrical needs. Thanks again Oscar!
              </em>
            </p>
          </div>
        </div>
        {/* Row 2 */}
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
                Used them for all the electrical on 7 storey apartment building. Work was extremely neat, they always
                cleaned up after themselves, and workmanship was very good. Kept ahead of other trades and didn't have
                to be chased. Probably the best trade we had on that job -- would definitely work with them again!
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
                We hired Visca Electric to install a home security system in our home and they did an amazing job.
                Sandro and his team were professional, polite and clean. Every time I set the alarm, I am impressed by
                the installation and quality. I would recommend them to anyone!
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
