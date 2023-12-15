import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[url('/img/hero.jpeg')] bg-cover pt-20 pb-20 md:pt-40 md:pb-60">
      <div className="container text-center">
        <h1 className="md:text-xl text-white font-thin uppercase tracking-widest">Visca Electric</h1>
        <hr className="mx-auto w-1/2 opacity-50 border-1 border-white" />
        <h2 className="text-white pt-2 pb-2 md:pt-6 md:pb-6">Powered By Quality</h2>
        <hr className="mx-auto w-1/2 opacity-50 border-1 border-white" />
        <Link href="/contact">
          <button className="btn btn-custom mt-6">Get A Quote</button>
        </Link>
      </div>
    </section>
  );
}
