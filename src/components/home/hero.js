import Link from "next/link";

export default function Hero() {
  return (
    <div className="container text-center">
      <h1>Visca Electric</h1>
      <hr className="mx-auto w-1/2" />
      <h2>Powered By Quality</h2>
      <hr className="mx-auto w-1/2" />
      <Link href="/contact">
        <button className="btn btn-primary">Get A Quote</button>
      </Link>
    </div>
  );
}
