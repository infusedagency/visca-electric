import InnerHero from "@/components/innerHero";
import Image from "next/image";
import aboutImg from "../../public/img/smart-inner.jpeg";
import smartVoice from "../../public/img/smart-voice.png";
import smartWifi from "../../public/img/smart-wifi.jpeg";
import smartMulti from "../../public/img/smart-multi.jpeg";
import smarTheatre from "../../public/img/smart-theatre.jpeg";
import smartSecurity from "../../public/img/smart-security.png";
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
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-20 lg:pb-20">
              <div className="lg:flex-1">
                <h2>Voice and Remote Control</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Enjoy the convenience of controlling your home with just your voice or remotely through a mobile app.
                  We specialize in integrating voice-activated assistants and user-friendly interfaces.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={smartVoice} alt="Voice and Remote Control" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Wi-Fi and Networking Systems</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Experience seamless Wi-Fi connectivity with our robust and reliable network solutions. Stream, game,
                  and work without interruptions.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={smartWifi} alt="Wi-Fi and Networking Systems" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Multi-room Audio</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Enjoy rich sounding audio in your living room, energizing beats in the kitchen, and soothing melodies
                  in your bedroom – simultaneously and effortlessly.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={smartMulti} alt="Multi-room Audio" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Home Theatres</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Treat yourself with stunning visuals and sound from state-of-the-art projectors, high-definition
                  screens, and audio systems. Every detail, every frame, captured with unparalleled clarity. Our audio
                  systems transport you into the heart of the action, delivering spine-tingling, theater-quality sound.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={smarTheatre} alt="Home Theatres" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pb-20">
              <div className="lg:flex-1">
                <h2>Security Systems and Alarm.com</h2>
                <hr className="w-20 border-1 border-red mt-2 mb-6" />
                <p className="lg:w-3/4">
                  Implement state-of-the-art security systems, including smart cameras, doorbell cameras, and automated
                  locks, to keep your home safe and secure. Get alarms, motion detection, and other notifications sent
                  right to your phone with the alarm.com app.
                </p>
              </div>
              <div className="lg:flex-1">
                <Image className="mt-5 lg:mt-0 mb-5 lg:mb-0" src={smartSecurity} alt="Security Systems and Alarm.com" />
              </div>
            </div>
            {/* Cards */}
            {/* Row 2 */}
            {/* <div className="flex flex-col lg:flex-row lg:gap-10 lg:pt-10 justify-items-stretch">
              <div className="lg:flex-1  border-solid border-2 border-red p-6 lg:p-10 mb-6 lg:mb-0">
                <h2 class="text-[24px] lg:text-[32px] font-normal">Customer Education and Support</h2>
                <p>
                  We believe in empowering our clients. Our team provides thorough education on smart home systems and
                  offers ongoing support to ensure a smooth experience.{" "}
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </motion.div>
    </>
  );
}
