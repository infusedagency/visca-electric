import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero bg-[url('/img/hero.jpg')] bg-center bg-cover pt-20 pb-20 md:pt-60 md:pb-60">
      <div className="container text-center">
        <h1 className="md:text-xl text-white font-light uppercase tracking-widest">Visca Electric</h1>
        <hr className="mx-auto w-1/2" />
        <h2>Powered By Quality</h2>
        <hr className="mx-auto w-1/2" />
        <Link href="/contact">
          <button className="btn btn-primary">Get A Quote</button>
        </Link>
      </div>
    </section>
  );
}
