import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[url('/img/hero.jpeg')] bg-cover pt-20 pb-20 lg:pt-60 lg:pb-60">
      <div className="container text-center">
        <h1>Visca Electric</h1>
        <hr className="mx-auto w-1/2 opacity-50 border-1 border-white" />
        <h2 className="text-white lg:text-base pt-2 pb-2 mb-0 lg:pt-6 lg:pb-6">Powered By Quality</h2>
        <hr className="mx-auto w-1/2 opacity-50 border-1 border-white" />
        <Link href="/contact">
          <button className="mt-6">Get A Quote</button>
        </Link>
      </div>
    </section>
  );
}
