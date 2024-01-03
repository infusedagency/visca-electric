import Link from "next/link";
import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/smart-inner.jpeg";
import aboutImgTwo from "../../public/img/smart-inner-2.jpeg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function SmartHomes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <InnerHero title="Smart Homes" />
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section className="inner-content">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
              <div className="lg:flex-1">
                <h2>A Smart System to Automate Your Home</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  High performing products and systems that unite your home allowing you to control everything in your
                  home.
                  <br />
                  <br />
                  Unify and control your home’s entertainment, security and comfort systems with automated products.
                  Controlled lightning, window shades, thermostat, door locks and more to simplify your life.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={aboutImg} alt="smart homes" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20 lg:pb-20">
              <div className="lg:flex-1">
                <h2>Easy-to-Use Interface to Control Your Home</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p>
                  The easy to use app allows you to take control of your home. Multi-room audio, lightning, security,
                  cameras, window shading and more can all be controlled from the palm of your hand. Check on your house
                  or change scheduled settings while on the go from your mobile device.
                  <br />
                  <br />
                  Get instant notifications when the doorbell rings or in the event of a security breach. Automate your
                  life with scheduled thermostat temperatures and lightning. Intuity improves your life, from securing
                  your home to turning on the porch light before you get home, making less for you to worry about.
                  <br />
                  <br />
                  Available for iOS and Android devices.
                </p>
                <Link href="/portfolio">
                  <button className="mt-6">View Portfolio</button>
                </Link>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={aboutImgTwo} alt="smart homes 2" />
              </div>
            </div>
            {/* Cards */}
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Lighting Control</h2>
                <p>Controlled lightning with scheduling options</p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Multi-Room Audio</h2>
                <p>Listen to your favourite music in all rooms of the house, at the same time</p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Intercom &amp; Video Door Entry</h2>
                <p>See who is at your door at any time with a video door entry</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Security</h2>
                <p>Whether your at home or on the go, know your home is safe and secure</p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Thermostat Control</h2>
                <p>Schedule your thermostat and never have to touch it again.</p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Digital Door Locks</h2>
                <p>Keyless door entry systems that can be controlled by the Intuity system.</p>
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">IP Cameras</h2>
                <p>Giving you peace of mind knowing your house is always being monitored.</p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Garage Door Control</h2>
                <p>Open your garage door with the Intuity system</p>
              </div>
              <div className="lg:flex lg:items-center lg:flex-1  border-solid border-0 border-red p-6 lg:p-10 mb-6 lg:mb-0 sm:hidden md:block">
                <h2 class="text-[24px] lg:text-[32px] font-normal">&nbsp;</h2>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
