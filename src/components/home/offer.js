import Link from "next/link";

export default function Offer() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
          <div className="border-solid border-2 border-sky-500">
            <h2>Limited Time Offer</h2>
          </div>
          <h2>Panel Upgrade Special</h2>
          <hr className="w-20" />
          <p>
            100A fuse to breaker upgrade $1,050.00 + HST
            <br></br>
            VISCA electric is your trusted electrical contractor for this essential upgrade. Our experienced
            electricians will assess your needs and install your new breaker panel with quality and care. We will
            deliver our services on time and as quoted. You can rely on us to communicate the panel upgrade process
            every step of the way.  
          </p>
        </div>
        <div className="md:flex-1">
          <img src="" alt="" />
        </div>
      </div>
      <Link href="/offer">
        <button className="btn btn-primary">View Offer</button>
      </Link>
    </div>
  );
}
