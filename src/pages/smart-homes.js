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
                  Transform your home into a smart haven with VISCA electric’s Smart Home Services, where innovation
                  meets expertise. Discover the future of living today. We offer a comprehensive suite of smart home
                  solutions including lighting controls, Wi-Fi/networking, multiroom audio, home theatres, security
                  systems, and more. We understand that every home is unique. Our team will work closely with you to
                  plan, and design customized smart home solutions tailored to your lifestyle and preferences.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={aboutImg} alt="smart homes" />
              </div>
            </div>
            {/* <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20 lg:pb-20">
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
            </div> */}
            {/* Cards */}
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Voice and Remote Control</h2>
                <p>
                  Enjoy the convenience of controlling your home with just your voice or remotely through a mobile app.
                  We specialize in integrating voice-activated assistants and user-friendly interfaces.{" "}
                </p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Wi-Fi and Networking Systems</h2>
                <p>
                  Experience seamless Wi-Fi connectivity with our robust and reliable network solutions. Stream, game,
                  and work without interruptions.{" "}
                </p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Multi-room Audio</h2>
                <p>
                  Enjoy rich sounding audio in your living room, energizing beats in the kitchen, and soothing melodies
                  in your bedroom – simultaneously and effortlessly.{" "}
                </p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mt-2 lg:mt-0 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Home Theatres</h2>
                <p>
                  Treat yourself with stunning visuals and sound from state-of-the-art projectors, high-definition
                  screens, and audio systems. Every detail, every frame, captured with unparalleled clarity. Our audio
                  systems transport you into the heart of the action, delivering spine-tingling, theater-quality sound.{" "}
                </p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Security Systems and Alarm.com</h2>
                <p>
                  Implement state-of-the-art security systems, including smart cameras, doorbell cameras, and automated
                  locks, to keep your home safe and secure. Get alarms, motion detection, and other notifications sent
                  right to your phone with the alarm.com app.{" "}
                </p>
              </div>
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Customer Education and Support</h2>
                <p>
                  We believe in empowering our clients. Our team provides thorough education on smart home systems and
                  offers ongoing support to ensure a smooth experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
