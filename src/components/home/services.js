import Image from "next/image";

import res from "../../../public/img/residential.jpeg";
import comm from "../../../public/img/commercial.jpeg";
import smart from "../../../public/img/smart-homes.jpeg";

export default function Services() {
  return (
    <section className="services bg-grey pt-6 pb-6 lg:pt-56 lg:pb-24 lg:mt-[-200px]">
      <div className="container">
        <h2>Our Services</h2>
        <hr className="w-20 border-1 border-red mt-2 mb-6 lg:mb-20" />
        <div className="flex flex-col lg:flex-row items-center lg:gap-24">
          <div className="lg:w-1/3">
            <Image src={res} alt="residential" />
          </div>
          <div className="lg:w-2/3">
            <h3 className="mt-4 md:mt-0">Residential</h3>
            <p>
              Since our establishment in 1991, VISCA electric has been a trusted partner for homeowners, offering a
              comprehensive range of electrical services. With a focus on quality, reliability, and customer service, we
              strive to enhance the electrical systems of homes to meet the evolving needs of modern living. 
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-24 lg:pt-14">
          <div className="lg:w-1/3">
            <Image src={comm} className="mt-6 md:mt-0" alt="commercial" />
          </div>
          <div className="lg:w-2/3">
            <h3 className="mt-4 md:mt-0">Commercial</h3>
            <p>
              Since our establishment in 1991, VISCA electric has been a trusted partner for homeowners, offering a
              comprehensive range of electrical services. With a focus on quality, reliability, and customer service, we
              strive to enhance the electrical systems of homes to meet the evolving needs of modern living. 
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-24 lg:pt-14">
          <div className="lg:w-1/3">
            <Image src={smart} className="mt-6 md:mt-0" alt="smart homes" />
          </div>
          <div className="lg:w-2/3">
            <h3 className="mt-4 md:mt-0">Smart Homes</h3>
            <p>
              Since our establishment in 1991, VISCA electric has been a trusted partner for homeowners, offering a
              comprehensive range of electrical services. With a focus on quality, reliability, and customer service, we
              strive to enhance the electrical systems of homes to meet the evolving needs of modern living. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
