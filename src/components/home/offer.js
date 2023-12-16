import Link from "next/link";
import Image from "next/image";
import offer from "../../../public/img/offer.jpeg";

export default function Offer() {
  return (
    <div className="container pt-8 pb-8 lg:pt-24 lg:pb-24">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="lg:flex-1">
          <div className="text-center border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-10">
            <h2 class="text-[24px] lg:text-[32px] font-normal">Limited Time Offer</h2>
          </div>
          <h2>Panel Upgrade Special</h2>
          <hr className="w-20 border-1 border-red mt-2 mb-6 lg:mb-10" />
          <p>
            100A fuse to breaker upgrade $1,050.00 + HST.
            <br />
            <br />
            VISCA electric is your trusted electrical contractor for this essential upgrade. Our experienced
            electricians will assess your needs and install your new breaker panel with quality and care. We will
            deliver our services on time and as quoted. You can rely on us to communicate the panel upgrade process
            every step of the way.  
          </p>
          <Link href="/offer">
            <button className="mt-6 mb-6 lg:mt-10 lg:mb-0">View Offer</button>
          </Link>
        </div>
        <div className="lg:flex-1">
          <Image className="w-full" src={offer} alt="offer" />
        </div>
      </div>
    </div>
  );
}
