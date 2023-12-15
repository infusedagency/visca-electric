import Link from "next/link";
import Image from "next/image";
import offer from "../../../public/img/offer.jpeg";

export default function Offer() {
  return (
    <div className="container lg:pt-24 lg:pb-24">
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="md:flex-1">
          <div className="text-center border-solid border-2 border-red p-10 mb-10">
            <h2 class="text-[24px] md:text-[32px] font-normal">Limited Time Offer</h2>
          </div>
          <h2>Panel Upgrade Special</h2>
          <hr className="w-20 border-1 border-red mt-2 md:mb-10" />
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
            <button className="md:mt-10">View Offer</button>
          </Link>
        </div>
        <div className="md:flex-1">
          <Image className="w-full" src={offer} alt="offer" />
        </div>
      </div>
    </div>
  );
}
