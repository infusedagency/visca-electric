import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container text-center">
      <h1>Our Portfolio</h1>
      <hr />
      <h2>
        With over three decades of industry experience, VISCA electric (formerly Sam Visca Electric) has a deep
        understanding of electrical systems and a proven track record of delivering high-quality services.  
      </h2>
      <Link href="/portfolio">
        <button className="btn btn-primary">View Portfolio</button>
      </Link>
      {/* Images */}
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
          <img src="" alt="image 1" />
        </div>
        <div className="md:flex-1">
          <img src="" alt="image 2" />
        </div>
      </div>
    </div>
  );
}
