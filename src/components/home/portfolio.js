import Link from "next/link";
import Image from "next/image";
import port1 from "../../../public/img/port-1.jpeg";
import port2 from "../../../public/img/port-2.jpeg";

export default function Portfolio() {
  return (
    <div className="container text-center md:pt-24 md:pb-24">
      <h1 className="text-white text-lg font-thin">Our Portfolio</h1>
      <hr className="mx-auto w-20 border-1 border-red mt-2" />
      <p className="text-white opacity-30 w-2/3 mx-auto mt-8 mb-8">
        With over three decades of industry experience, VISCA electric (formerly Sam Visca Electric) has a deep
        understanding of electrical systems and a proven track record of delivering high-quality services.  
      </p>
      <Link href="/portfolio">
        <button className="btn btn-custom">View Portfolio</button>
      </Link>
      {/* Images */}
      <div className="flex flex-col md:flex-row mt-16 gap-6">
        <div className="md:flex-1">
          <Image className="w-full" src={port1} alt="image 1" />
        </div>
        <div className="md:flex-1">
          <Image className="w-full" src={port2} alt="image 2" />
        </div>
      </div>
    </div>
  );
}
