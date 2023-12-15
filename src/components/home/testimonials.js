export default function Testimonials() {
  return (
    <div className="container">
      <h1 className="mb-4">Our Happy Clients</h1>
      <hr className="w-20" />
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="flex-1">
          <div className="flex justify-between">
            <p>
              <strong>Jim Halucha</strong>
            </p>
            <p>stars</p>
          </div>
          <p>
            <em>
              “I've been working with Visca Electric for almost 20 years and have used them both personally and
              professionally. They are knowledgeable, professional and very well organized. They've done small
              electrical maintenance items at our office to full scale electrical installations on townhouse
              developments for us. From big jobs to small, they really can do it all!”
            </em>
          </p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <p>
              <strong>Linda Gross</strong>
            </p>
            <p>stars</p>
          </div>
          <p>
            <em>
              We recently had several jobs done by Visca Electric and were absolutely delighted with the service we
              received. We were lucky enough to have Oscar perform all the services including a new breaker panel,
              installation of new light fixtures and copper pigtailing of our aluminum wiring. He was on time and a
              pleasure to have in our home. His friendly attitude and excellent work ethic was very much appreciated. We
              would definitely call on them again for our electrical needs. Thanks again Oscar!
            </em>
          </p>
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-col md:flex-row pt-10 md:gap-10">
        <div className="flex-1">
          <div className="flex justify-between">
            <p>
              <strong>Savan Chandria</strong>
            </p>
            <p>stars</p>
          </div>
          <p>
            <em>
              Used them for all the electrical on 7 storey apartment building. Work was extremely neat, they always
              cleaned up after themselves, and workmanship was very good. Kept ahead of other trades and didn't have to
              be chased. Probably the best trade we had on that job -- would definitely work with them again!
            </em>
          </p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <p>
              <strong>Kimbel Donayre</strong>
            </p>
            <p>stars</p>
          </div>
          <p>
            <em>
              We hired Visca Electric to install a home security system in our home and they did an amazing job. Sandro
              and his team were professional, polite and clean. Every time I set the alarm, I am impressed by the
              installation and quality. I would recommend them to anyone!
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
