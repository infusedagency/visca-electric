import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/about.jpeg";

export default function About() {
  return (
    <>
      <InnerHero title="About" />
      <section className="inner-content">
        <div className="container">
          <h2>Powered By Quality</h2>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
            <div className="lg:flex-1">
              <p>
                With over three decades of industry experience, VISCA electric (formerly Sam Visca Electric) has a deep
                understanding of electrical systems and a proven track record of delivering high-quality services.
              </p>
              <br />
              <p>
                Our commitment to excellence and dedication to providing top-tier electrical services has solidified our
                position as a trusted and preferred choice for residential, commercial, and industrial clients.
              </p>
            </div>
            <div className="lg:flex-1">
              <Image src={aboutImg} alt="About" />
            </div>
          </div>
          <br />
          <h2>Why Visca Electric?</h2>
          <p>
            Our mission is to provide high quality electrical services while prioritizing safety, quality, and customer
            satisfaction. We are dedicated to staying at the forefront of industry advancements and delivering
            sustainable, reliable solutions for our clients. Our customer-focused approach means that we tailor our
            services to meet the unique needs of each client, ensuring their satisfaction. We offer a wide range of
            electrical services, including electrical for new builds, residential, commercial, industrial, renovations,
            lighting retrofits, fire alarms, 24/7 emergency services, smart homes, Wi-Fi, data networks, audio/video,
            security alarm and monitoring, CCTV surveillance, and much more.
          </p>
          <br />
          <p>
            Quality is at the core of everything we do. From materials and workmanship to customer service, we are
            dedicated to delivering excellence in every aspect of our business.
          </p>
        </div>
      </section>
    </>
  );
}
