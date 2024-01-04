import Link from "next/link";

export default function ContactSidebar() {
  return (
    <>
      <h3 className="mt-5 lg:mt-0">Location & Contact Info</h3>
      <p>
        5602 George St.
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
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11650.347726315167!2d-79.087733!3d43.113195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60bccb255272b8ee!2sSam+Visca+Electric!5e0!3m2!1sen!2sca!4v1497470643654"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <h3 className="mt-5">Hours</h3>
      <p>
        <strong>Monday–Friday:</strong> 7:00am – 4:00pm
        <br />
        <strong>Saturday:</strong> Closed
        <br />
        <strong>Sunday:</strong> Closed
      </p>
      <p>Office closed at 3:30pm on Friday.</p>
      <br />
      <div className="border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
        <h2 class="text-[24px] lg:text-[32px]">Request A Service Call</h2>
        <Link href="/request-service-call">
          <button className="mt-6">Request Now</button>
        </Link>
      </div>
    </>
  );
}
