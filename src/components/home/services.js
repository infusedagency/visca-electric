import Link from "next/link";
import Image from "next/image";

import res from "../../../public/img/residential.jpeg";
import comm from "../../../public/img/commercial.jpeg";
import smart from "../../../public/img/smart-homes.jpeg";

export default function Services() {
  return (
    <div className="container">
      <h1 className="text-white text-lg font-thin">Our Services</h1>
      <hr className="w-20 border-1 border-red mt-2 mb-20" />
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
          <Image src={res} className="w-full" alt="residential" />
        </div>
        <div className="md:flex-2">
          <h3>
            <Link href="/residential">Residential</Link>
          </h3>
          <p>
            Since our establishment in 1991, VISCA electric has been a trusted partner for homeowners, offering a
            comprehensive range of electrical services. With a focus on quality, reliability, and customer service, we
            strive to enhance the electrical systems of homes to meet the evolving needs of modern living. 
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
          <Image src={comm} className="w-full" alt="commercial" />
        </div>
        <div className="md:flex-1">
          <h3>
            <Link href="/commercial">Commercial</Link>
          </h3>
          <p>
            Since our establishment in 1991, VISCA electric has been a trusted partner for homeowners, offering a
            comprehensive range of electrical services. With a focus on quality, reliability, and customer service, we
            strive to enhance the electrical systems of homes to meet the evolving needs of modern living. 
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
          <Image src={smart} className="w-full" alt="smart homes" />
        </div>
        <div className="md:flex-1">
          <h3>
            <Link href="/smart-homes">Smart Homes</Link>
          </h3>
          <p>
            Since our establishment in 1991, VISCA electric has been a trusted partner for homeowners, offering a
            comprehensive range of electrical services. With a focus on quality, reliability, and customer service, we
            strive to enhance the electrical systems of homes to meet the evolving needs of modern living. 
          </p>
        </div>
      </div>
    </div>
  );
}
