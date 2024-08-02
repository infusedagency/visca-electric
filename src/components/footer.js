import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/footer-logos.png";

export default function Footer() {
  return (
    <footer className="pt-4 pb-4 lg:pt-8 lg:pb-8 bg-grey">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="opacity-100">
              5602 George St., Unit 4, Niagara Falls, Ontario, L2E 3E2 | <a href="tel:905-354-0184">905-354-0184</a> |{" "}
              <a href="mailto:info@viscaelectric.ca">info@viscaelectric.ca</a>
            </p>
          </div>
          <div className="flex flex-1 justify-normal lg:justify-end">
            <p className="opacity-100">
              {new Date().getFullYear()} 2024 VISCA electric |{" "}
              <a target="_blank" href="https://www.termsfeed.com/live/f736d78e-6b52-4a55-9166-96e055ab23d6">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="infused">
              Website by <a target="_blank" href="https://infused.agency">Infused Agency</a>
            </p>
          <Image className="mt-5" src={logo} alt="accreditations" />
          </div>
        </div>
      </div>
    </footer>
  );
}
